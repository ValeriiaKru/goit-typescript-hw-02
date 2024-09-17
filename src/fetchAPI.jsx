import axios from "axios";

const fetchPhotos = async (userRequest, pageNumber = 1) => {
    const params = {
        query: userRequest,
        page: pageNumber,
        orientation: 'landscape',
        per_page: 16,
    };

    const { data } = await axios.get(
        'https://api.unsplash.com/search/photos/?client_id=LjsxDQ_cf2kxn0eiQl3T1tZ4QtDBiM-KMAeTI3CQCFs',
        {
            params,
            headers: {
                "Accept-Version": "v1",
            },
        }
    );
    return data;
};




export default fetchPhotos;