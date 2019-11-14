import Axios from 'axios';

export const getBooks = () => {
    return {
        type: 'GET_BOOKS',
        payload: Axios.get('http://localhost:7777/api/v1/books')
    };
};

export const getSelectedGenre = (idgenre) => {
    return {
        type: 'GET_GENRES_BOOKS',
        payload: Axios.get(`http://localhost:7777/api/v1/books/select?genre=${idgenre}`)
    };
};

export const getSelectedTitle= (title) => {
    return {
        type: 'GET_TITLE_BOOKS',
        payload: Axios.get(`http://localhost:7777/api/v1/books/select?title=${title}`)
    }
}


export const insertBook = (newBook) => {
    return {
        type: 'INSERT_BOOK',
        payload: Axios.post('http://localhost:7777/api/v1/books', newBook)
    };
};

export const updateBook = (id, editedBook) => {
    return{
        type: 'UPDATE_BOOK',
        payload: Axios.patch(`http://localhost:7777/api/v1/books/book?id=${id}`, editedBook)
    }
}