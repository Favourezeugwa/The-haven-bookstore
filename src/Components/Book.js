import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/books/books';

const Book = (props) => {
  const { book } = props;

  const {
    title, author, percentageCompleted, currentChapter,
  } = book;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <li className="single-book">
      <div>
        <p>Action</p>
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
        {percentageCompleted}
        %
        <span>completed</span>
      </div>
      <div>
        <h2>CURRENT CHAPTER</h2>
        <h3>
          Chapter
          {currentChapter}
        </h3>
        <button type="button">UPDATE PROGRESS</button>
      </div>
      <hr />
    </li>
  );
};

Book.defaultProps = {
  book: {},
  title: '',
  author: '',
  percentageCompleted: 0,
  currentChapter: 0,
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  author: PropTypes.string,
  percentageCompleted: PropTypes.number,
  currentChapter: PropTypes.number,
};

export default Book;
