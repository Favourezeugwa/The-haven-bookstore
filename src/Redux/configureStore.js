import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/Books';
import categoriesReducer from './Categories/Categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore(rootReducer);

export default store;
