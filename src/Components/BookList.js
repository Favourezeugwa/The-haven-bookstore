import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books } = props;
  return (
    <ul>
      { Object.keys(books).map((itemId) => <Book key={itemId} book={books[itemId]} id={itemId} />)}
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
