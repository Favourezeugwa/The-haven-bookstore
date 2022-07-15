import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore(
  {
    reducer: {
      books: booksReducer,
      categories: categoriesReducer,
    },
  }, applyMiddleware(thunk),
);

export default store;
