import { Component, inject, NgZone } from '@angular/core';
import { VariablesService } from '@parts/services/variables.service';
import { NonNullableFormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { AssetBalance, AssetInfo } from '@api/models/assets.model';
import BigNumber from 'bignumber.js';
import { intToMoney } from '@parts/functions/int-to-money';
import { insuficcientFunds } from '@parts/utils/zano-errors';
import { BackendService } from '@api/services/backend.service';
import { moneyToInt } from '@parts/functions/money-to-int';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-burn-custom-asset',
    templateUrl: './burn-custom-asset.component.html',
    styleUrls: ['./burn-custom-asset.component.scss'],
})
export class BurnCustomAssetComponent {
    public readonly variablesService: VariablesService = inject(VariablesService);

    public readonly data: { assetInfo: AssetInfo } = inject(MAT_DIALOG_DATA);

    public readonly matDialogRef: MatDialogRef<BurnCustomAssetComponent> = inject(MatDialogRef);

    private readonly _fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);

    public readonly form = this._fb.group({
        amount: this._fb.control('', [
            Validators.required,
            (control): ValidationErrors | null => {
                const { value: amount } = control;
                const {
                    assetInfo: { asset_id },
                } = this.data;
                const { currentWallet, maximum_value } = this.variablesService;
                const prepared_amount = new BigNumber(amount);
                const assetBalance: AssetBalance | undefined = currentWallet.getBalanceByAssetId(asset_id);

                if (!assetBalance) {
                    return {
                        asset_not_found: true,
                    };
                }

                const {
                    unlocked,
                    asset_info: { decimal_point },
                } = assetBalance;

                const maximum_amount_by_decimal_point = intToMoney(maximum_value, decimal_point);
                if (prepared_amount.isGreaterThan(maximum_amount_by_decimal_point)) {
                    return { greater_than_maximum_amount: { max: maximum_amount_by_decimal_point } };
                }

                const preparedUnlocked = intToMoney(unlocked, decimal_point);
                return prepared_amount.isGreaterThan(preparedUnlocked) ? { insuficcientFunds } : null;
            },
        ]),
    });

    private readonly _backendService: BackendService = inject(BackendService);

    private readonly _ngZone: NgZone = inject(NgZone);

    public submit(): void {
        const { amount } = this.form.getRawValue();
        const {
            currentWallet: { wallet_id },
        } = this.variablesService;
        const {
            assetInfo: { asset_id, decimal_point },
        } = this.data;

        const params = {
            burn_amount: moneyToInt(amount, decimal_point).toString(),
            asset_id,
        };

        this._backendService.asyncCall2a(
            'call_wallet_rpc',
            wallet_id,
            {
                jsonrpc: '2.0',
                id: 0,
                method: 'burn_asset',
                params,
            },
            (job_id: number): void => {
                this._ngZone.run(() => {
                    this.matDialogRef.close(job_id);
                });
            }
        );
    }
}