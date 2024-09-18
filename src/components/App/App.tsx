import { useState, useEffect } from 'react';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';

import fetchPhotos from '../../fetchAPI';
import toast from 'react-hot-toast';
import { Image } from './App.types';

const App = () => {
  const [images, setImages] = useState<Image[]|null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchingValue, setSearchingValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false); 
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<{
    url: string,
    alt: string,
  }>({
    url: '',
    alt: '',
  });

const openModal = (): void => {
  setIsOpen(true);
};

const closeModal = (): void => {
  setIsOpen(false);
};



  useEffect(() => {
    if (searchingValue.trim() === '') return;
    const getPhotos = async (value:string) => {
      setError(false);
      setIsLoading(true);
    
    try {
      const data = await fetchPhotos(value, pageNumber);
      setImages((prevImages) => {
        if (prevImages !== null) {
          return [...prevImages, ...data.results];
        }
        return data.results;
      });

      setTotalPages(data.total_pages);
      if (data.total_pages === 0) {
        toast.error('There are no results for your request.', {
          duration: 3000,
          position: 'top-right',
        });
        return;
      }
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  getPhotos(searchingValue);
  }, [searchingValue, pageNumber]);
  
  const handleSubmit = (userValue:string):void => {
    setImages(null);
    setPageNumber(1);
    setSearchingValue(userValue);
  };


  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images !== null && (
        <ImageGallery
          images={images}
          openModal={openModal}
          setCurrentImage={setCurrentImage}
        />
      )}
      <ImageModal
        modalIsOpen={isOpen}
        closeModal={closeModal}
        currentImage={currentImage}
      />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {totalPages > pageNumber && (
        <LoadMoreBtn
          handleClick={() => {
            setPageNumber(pageNumber + 1);
          }}
        />
      )}
    </div>
  );
};



export default App;
