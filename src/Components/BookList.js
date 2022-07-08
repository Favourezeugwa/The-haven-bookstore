import React from 'react';
import PropTypes, { Array } from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books } = props;
  return (
    <ul>
      { books.map((book) => <Book key={book.id} book={book} />)}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default BookList;
