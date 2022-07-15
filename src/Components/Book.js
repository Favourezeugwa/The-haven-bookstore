import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../Redux/books/books';

const Book = (props) => {
  const { id, book } = props;

  const {
    title, author, category,
  } = book[0];

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBook(id));
  };

  return (
    <li className="single-book">
      <div>
        <p>{category}</p>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <button
          type="button"
          onClick={handleClick}
        >
          Remove
        </button>
      </div>
      <div>
        10%
        <span>completed</span>
      </div>
      <div>
        <h2>CURRENT CHAPTER</h2>
        <h3>
          Chapter 1
        </h3>
        <button type="button">UPDATE PROGRESS</button>
      </div>
      <hr />
    </li>
  );
};

Book.defaultProps = {
  book: {},
  id: '',
  title: '',
  author: '',
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object),
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
