import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;

  const {
    title, author, percentageCompleted, currentChapter,
  } = book;

  return (
    <li className="single-book">
      <div>
        <p>Action</p>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
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

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percentageCompleted: PropTypes.number.isRequired,
  currentChapter: PropTypes.number.isRequired,
};

export default Book;
