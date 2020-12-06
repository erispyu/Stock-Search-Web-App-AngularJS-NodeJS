import { ArticleData } from './article-data';

export interface NewsData {
    status: string;
    totalResults: number;
    articles: ArticleData[];
}