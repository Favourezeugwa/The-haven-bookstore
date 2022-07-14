const CREATE = 'bookstore/books/CREATE';
const REMOVE = 'bookstore/books/REMOVE';

const books = [];

export const createBook = (book) => ({
  type: CREATE, book,
});

export const removeBook = (id) => ({
  type: REMOVE, id,
});

const booksReducer = (state = books, action = {}) => {
  switch (action.type) {
    case CREATE:
      return [...books, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
