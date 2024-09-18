
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Image } from '../App/App.types';

interface ImageGalleryProps {
    images: Image[];
    openModal: () => void;
    setCurrentImage: (obj: { url: string; alt: string }) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal, setCurrentImage }) => {
    return (
        <ul className={css.list}>
            {images.map((image) => (
                <li className={css.listItem} key={image.id}>
                    <ImageCard
                        openModal={openModal}
                        setCurrentImage={setCurrentImage}
                        title={image.alt_description}
                        image={image} 
                        likes={image.likes}
                    />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;
