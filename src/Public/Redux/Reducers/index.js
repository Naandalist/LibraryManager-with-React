import {combineReducers} from 'redux';
import {books} from './books';

const appReducer = combineReducers({
    getBooks: books.getBooks,
    insertBook: books.insertBook,
    updateBook: books.updateBook,
    getSelectedGenre: books.getSelectedGenre,
    getSelectedTitle: books.getSelectedTitle,
});

export default appReducer;