import axios from "axios";
import { Image } from "./components/App/App.types";

interface FetchResponse {
    total: number;
    total_pages: number;
    results: Image[];
}

const fetchPhotos = async (
    userRequest: string,
pageNumber: number): Promise < FetchResponse > => {
    const params = {
        query: userRequest,
        page: pageNumber,
        orientation: 'landscape',
        per_page: 16,
    };
    const { data } = await axios.get<FetchResponse>('https://api.unsplash.com/search/photos/?client_id=LjsxDQ_cf2kxn0eiQl3T1tZ4QtDBiM-KMAeTI3CQCFs',
        {
            params,
            headers: {
                "Accept-Version": "v1",
            },
        }
    )
    return data;
};

export default fetchPhotos;

