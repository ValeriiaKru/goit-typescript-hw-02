import css from './ImageModal.module.css';
import { Image } from '../App/App.types';
import Modal from 'react-modal';
Modal.setAppElement('#root');

interface ImageModalProps{
    modalIsOpen: boolean;
    closeModal: () => void;
    currentImage: {
        url: string;
        alt: string;
    };
}

const customStyles = {
    content: {
        width: '80%',
        top: '50%',
        left: '50%',
        bottom: 'auto',
        right: 'auto',
        transform: 'translate(-50%, -50%)',

    },
};

const ImageModal: React.FC<ImageModalProps> = ({ modalIsOpen, closeModal, currentImage }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <img
                className={css.photoModal}
                src={currentImage.url}
                alt={currentImage.alt}
            />
            <p className={css.description}>{currentImage.alt}</p>
        </Modal>
    );
};

export default ImageModal;