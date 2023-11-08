import {NewsStatusEnum} from "@/enums/NewsStatusEnum";

export type NewsDetails = {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    createdAt: string;
    status: NewsStatusEnum;
};
