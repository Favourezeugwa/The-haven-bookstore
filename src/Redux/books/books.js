const CREATE = 'bookstore/books/CREATE';
const REMOVE = 'bookstore/books/REMOVE';

export const createBook = (book) => ({
  type: CREATE, book,
});

export const removeBook = (id) => ({
  type: REMOVE, id,
});

const initialState = [];

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
