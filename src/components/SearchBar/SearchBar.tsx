import css from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { FC } from 'react';

interface SearchBarProps {
  onSubmit: (userValue: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
    const userValue = (e.target as HTMLFormElement).searchingValue.value.trim();
    if (userValue === '') {
      toast.error('Enter a valid value!', {
        duration: 3000,
        position: 'top-right',
      });
    } else {
      onSubmit(userValue);
    }
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <Toaster />
        <div className={css.formContainer}>
          <button type="submit" className={css.searchBar}>
            <FaSearch />
          </button>
          <input
            className={css.textInput}
            type="text"
            name="searchingValue"
            placeholder="Search photos and images"
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
