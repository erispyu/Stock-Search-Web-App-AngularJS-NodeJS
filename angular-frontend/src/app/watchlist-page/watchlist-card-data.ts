export interface WatchlistCardData {
    ticker: string;
    companyName: string;
    lastPrice: number;
    change: number;
    changePercent: number;
    isChangePositive: boolean;
    isAddedToWatchlist: boolean;
}