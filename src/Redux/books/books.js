const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const ID = 'NzpAshi17nqjc0tUv5F8';
const URL = `${baseURL + ID}/books`;

const CREATE = 'bookstore/books/CREATE';
const REMOVE = 'bookstore/books/REMOVE';

export const createBook = (book) => ({
  type: CREATE, book,
});

export const removeBook = (id) => ({
  type: REMOVE, id,
});

// fetch new book
export const fetchBooks = () => (dispatch) => {
  fetch(URL).then((response) => response.json()).then((data) => dispatch(createBook(data)));
};

// create a new book
export const newBook = (book) => async (dispatch) => {
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  }).then(() => dispatch(fetchBooks()));
};

// delete a book
export const deleteBook = (id) => async (dispatch) => {
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  }).then(() => dispatch(fetchBooks()));
};

const initialState = {};

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE:
      return action.book;
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
