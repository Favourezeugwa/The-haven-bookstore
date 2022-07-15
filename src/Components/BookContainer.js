import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './BookList';
import Form from './Form';
import { fetchBooks } from '../Redux/books/books';

const BookContainer = () => {
// declare a global state variable for books and configureStore
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="book-shelve">
      <BookList books={books} />
      <Form />
    </div>
  );
};

export default BookContainer;
