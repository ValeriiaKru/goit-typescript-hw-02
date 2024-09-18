import css from './ImageCard.module.css';
import { Image } from '../App/App.types';

interface ImageCardProps {
    title: string;
    likes: number;
    image: Image;
    openModal: () => void;
    setCurrentImage: (obj: { url: string; alt: string }) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, likes, image, openModal, setCurrentImage }) => {
    const handleClick = () => {
        setCurrentImage({ url: image.urls.full, alt: title });
        openModal();
    };

    return (
        <div onClick={handleClick} className={css.container}>
            <img className={css.imageCard} src={image.urls.small} alt={title} />
            <div className={css.descriptionContainer}>
                <p>Likes: {likes}</p>
            </div>
        </div>
    );
};

export default ImageCard;
