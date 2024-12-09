import { AssetInfo } from '@api/models/assets.model';

export type PdcAssetInfo = AssetInfo & { logo: string; price_url: string };

export const pdcAssetInfo: PdcAssetInfo = {
    asset_id: 'd6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a',
    current_supply: 0,
    decimal_point: 12,
    full_name: 'Pdc',
    logo: 'assets/currency-icons/pdc.svg',
    meta_info: '',
    owner: '0000000000000000000000000000000000000000000000000000000000000000',
    price_url: 'https://explorer.pdc.org/api/price?asset=pdc',
    ticker: 'PDC',
    total_max_supply: 0,
};

export const defaultAssetLogoSrc = 'assets/currency-icons/custom_token.svg';
