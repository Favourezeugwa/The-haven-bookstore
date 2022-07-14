import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import Form from './Form';

const BookContainer = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="book-shelve">
      <BookList books={books} />
      <Form />
    </div>
  );
};

export default BookContainer;
