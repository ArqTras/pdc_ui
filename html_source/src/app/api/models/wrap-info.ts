export interface WrapInfo {
    tx_cost: {
        usd_needed_for_erc20: string;
        pdc_needed_for_erc20: string;
    };
    unwraped_coins_left: string;
}
