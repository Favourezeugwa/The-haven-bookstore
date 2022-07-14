import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../Redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      dispatch(createBook({
        id: uuidv4(),
        title,
        author,
        percentageCompleted: 8,
        currentChapter: 3,
      }));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div>
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Book Title"
        />
        <input
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          placeholder="Book Author"
        />
        <button
          type="submit"
          onClick={handleClick}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
export default Form;
