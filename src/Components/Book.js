import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../Redux/books/books';
import './styles/book.css';

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
      <div className="book-content">
        <div className="book-info">
          <p className="category">{category}</p>
          <h2 className="title">{title}</h2>
          <h3 className="author">{author}</h3>
          <div className="btn-container">
            <button
              type="button"
              className="btn"
            >
              Comments
            </button>
            <hr />
            <button
              type="button"
              className="btn-remove"
              onClick={handleClick}
            >
              Remove
            </button>
            <hr />
            <button
              type="button"
              className="btn"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="progress-container">
          <div className="first">
            <div className="circular-container">
              <div className="circle" />
            </div>
            <div className="completed">
              <p className="percent">10%</p>
              <p className="true">Completed</p>
            </div>
          </div>
          <hr className="progress-line" />
          <div className="second">
            <h2 className="current">CURRENT CHAPTER</h2>
            <h3 className="chapter">
              Chapter 1
            </h3>
            <button type="button" className="update">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
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
