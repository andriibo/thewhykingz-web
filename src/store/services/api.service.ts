import axios from "axios";
import {NewsStatusEnum} from "@/enums/NewsStatusEnum";
import type {News} from "@/store/types/news.type";
import type {NewsDetails} from "@/store/types/news-details.type";

export async function getNewsList(): Promise<News[]> {
    const response = await axios.get("/news");

    return response.data.data;
}

export async function changeStatus(newsId: number, status: NewsStatusEnum ): Promise<void> {
    await axios.patch(`/news/${newsId}/change-status`, {status});
}

export async function getNewsById(newsId: number): Promise<NewsDetails> {
    const response = await axios.get(`/news/${newsId}`);

    return response.data
}
