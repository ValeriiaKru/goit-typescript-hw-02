import css from './SearchBar.module.css';
import { FaSearch } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const userValue = e.target.elements.searchingValue.value.trim();
        if (userValue === '') {
            toast.error('Enter a valid value!', {
                duration: 3000,
                position: 'top-right',
            });
        } else onSubmit(userValue);
    };
    return (
        <header className={css.header}>
            <form onSubmit={handleSubmit}>
                <Toaster />
                <div className={css.formContainer}>
                    <button type="submit" className={css.searchBar}>
                        <FaSearch/>
                    </button>
                        <input
                            className={css.textInput}
                            type='text'
                            name='searchingValue'
                            placeholder='Search photos and images'
                        />
                </div>
            </form>
       </header>
   )
};

export default SearchBar;
