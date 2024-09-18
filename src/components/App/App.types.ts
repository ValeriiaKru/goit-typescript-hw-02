export interface Image{
    likes: number;
    id: string;
    urls: {
        full: string;
        small: string;
    };
    alt_description: string;
}
