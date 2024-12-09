import { ValidationErrors } from '@angular/forms';

export interface PdcValidationErrors extends ValidationErrors {
    errorText: string;
}

export const wrongAssetId: PdcValidationErrors = {
    errorText: 'ASSETS.FORM.ERRORS.WRONG_ASSET_ID',
};

export const wrongPassword: PdcValidationErrors = {
    errorText: 'Incorrect password',
};

export const insuficcientFunds: PdcValidationErrors = {
    errorText: 'ERRORS.INSUFFICIENT_FUNDS',
};

export const assetHasNotBeenAddedToWallet: PdcValidationErrors = {
    errorText: 'ERRORS.ASSET_HAS_NOT_BEEN_ADDED_TO_WALLET',
};

export const notFilePdcWallet: PdcValidationErrors = {
    errorText: 'ERRORS.NOT_FILE_PDC_WALLET',
};
