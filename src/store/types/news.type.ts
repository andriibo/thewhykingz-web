import * as NewsDetails from "@/store/types/news-details.type";

export type News = Omit<NewsDetails, 'description'>;
