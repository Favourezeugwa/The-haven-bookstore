import React, { useState } from 'react';
import BookList from './BookList';
import Form from './Form';

const BookContainer = () => {
  const [books] = useState([
    {
      id: 1,
      title: 'The hunger games',
      author: 'Gold Smith',
      percentageCompleted: 64,
      currentChapter: 17,
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Meyer',
      percentageCompleted: 8,
      currentChapter: 3,
    },
    {
      id: 3,
      title: 'Capital in the 21st century',
      author: 'Smith',
      percentageCompleted: 0,
      currentChapter: 1,
    },
  ]);

  return (
    <div className="book-shelve">
      <BookList books={books} />
      <Form />
    </div>
  );
};

export default BookContainer;
