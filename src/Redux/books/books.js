const CREATE = 'bookstore/books/CREATE';
const REMOVE = 'bookstore/books/REMOVE';

export const createBook = (book) => ({
  type: CREATE, book,
});

export const removeBook = (id) => ({
  type: REMOVE, id,
});

const initialState = [{
  id: 1,
  title: 'The hunger games',
  author: 'Gold Smith',
  percentageCompleted: 64,
  currentChapter: 17,
},
{
  id: 2,
  title: 'Dune',
  author: 'Meyer',
  percentageCompleted: 8,
  currentChapter: 3,
},
{
  id: 3,
  title: 'Capital in the 21st century',
  author: 'Smith',
  percentageCompleted: 0,
  currentChapter: 1,
}];

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
