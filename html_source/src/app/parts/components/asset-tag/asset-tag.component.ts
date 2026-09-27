import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PDC_ASSET_INFO } from '@parts/data/pdc-assets-info';
import { VariablesService } from '@parts/services/variables.service';
import { TranslateModule } from '@ngx-translate/core';

type AssetTagType = 'NATIVE' | 'WHITELISTED';

@Component({
    selector: 'pdc-asset-tag',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './asset-tag.component.html',
    styleUrls: ['./asset-tag.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssetTagComponent implements OnChanges {
    @Input()
    assetId!: string;

    type: AssetTagType | null = null;

    constructor(private _variablesService: VariablesService) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['assetId']) {
            this.type = this._getType(this.assetId);
        }
    }

    private _getType(assetId: string): AssetTagType | null {
        if (!assetId) return null;

        // PDC is always native
        if (assetId === PDC_ASSET_INFO.asset_id) {
            return 'NATIVE';
        }

        if (this._variablesService.verifiedAssetIdWhitelist.includes(assetId)) {
            return 'WHITELISTED';
        }

        return null;
    }
}
