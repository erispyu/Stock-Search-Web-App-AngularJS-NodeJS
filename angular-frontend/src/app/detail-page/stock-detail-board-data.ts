export interface StockDetailBoardData {
    ticker: string;
    companyName: string;
    exchangeCode: string;
    lastPrice: number;
    prevClose: number;
    change: number;
    changePercent: number;
    currTimestamp: Date;
    lastTimestamp: Date;
    marketStatus: string;
}