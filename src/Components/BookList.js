import React from 'react';
import PropTypes, { Object } from 'prop-types';
import Book from './Book';

const BookList = ({ books }) => (
  <ul>
    { books.map((book) => <Book key={book.id} book={book} />)}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,

};
export default BookList;
