const initialState = {
    bookData: '',
    // bookSelectedGenre:'',
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
  };
  
  export const books ={
  
    getBooks: (prevState = initialState, action) => {
      switch (action.type) {
        case 'GET_BOOKS_PENDING':
          return {
            ...prevState,
            isFulfilled: false,
            isRejected: false,
            isLoading: true,
          };
        case 'GET_BOOKS_REJECTED':
          return {
            ...prevState,
            isLoading: false,
            isRejected: true,
          };
        case 'GET_BOOKS_FULFILLED':
          return {
            ...prevState,
            isLoading: false,
            isFulfilled: true,
            bookData: action.payload.data.data,
          };  
        default:
          return prevState;
      }
    },
    getSelectedGenre: (prevState = initialState, action) => {
      switch (action.type) {
        case 'GET_GENRES_BOOKS_PENDING':
          return {
            ...prevState,
            isFulfilled: false,
            isRejected: false,
            isLoading: true,
          };
        case 'GET_GENRES_BOOKS_REJECTED':
          return {
            ...prevState,
            isLoading: false,
            isRejected: true,
          };
        case 'GET_GENRES_BOOKS_FULFILLED':
          return {
            ...prevState,
            isLoading: false,
            isFulfilled: true,
            bookData: action.payload.data.data,
          };  
        default:
          return prevState;
      }
    },
    getSelectedTitle: (prevState = initialState, action) => {
      switch (action.type) {
        case 'GET_TITLE_BOOKS_PENDING':
          return {
            ...prevState,
            isFulfilled: false,
            isRejected: false,
            isLoading: true,
          };
        case 'GET_TITLE_BOOKS_REJECTED':
          return {
            ...prevState,
            isLoading: false,
            isRejected: true,
          };
        case 'GET_TITLE_BOOKS_FULFILLED':
          return {
            ...prevState,
            isLoading: false,
            isFulfilled: true,
            bookData: action.payload.data.data,
          };  
        default:
          return prevState;
      }
    },
    insertBook: (prevState = initialState, action ) => {
      switch (action.type) {
        case 'INSERT_BOOK_PENDING':
          return {
            ...prevState,
            isLoading: true,
            isFulfilled: false,
            isRejected: false,
          };
        case 'INSERT_BOOK_REJECTED':
          return {
            ...prevState,
            isLoading: false,
            isRejected: true,
          };
        case 'INSERT_BOOK_FULLFILLED':
          return {
            ...prevState,
            isLoading: false,
            isFullfilled: true,
            bookData: action.payload.data,
          };
        default:
          return prevState
      }
    },

    updateBook: (prevState = initialState, action) => {
      switch (action.type) {
        case 'UPDATE_BOOK_PENDING':
          return {
            ...prevState,
            isLoading: true,
            isFulfilled: false,
            isRejected: false,
          };
        case 'UPDATE_BOOK_REJECTED':
          return {
            ...prevState,
            isLoading: false,
            isRejected: true,
          }
        case 'UPDATE_BOOK_FULLFILLED':
          return {
            ...prevState,
            isLoading: false,
            isFullfilled: true,
            bookData: action.payload.data.data,
          };
        default:
          return prevState
      }
    }

  }

  