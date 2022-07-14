import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books } = props;
  return (
    <ul>
      { books.map((book) => <Book key={book.id} book={book} />)}
    </ul>
  );
};

BookList.defaultProps = {
  books: [],
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Object),
};

export default BookList;
