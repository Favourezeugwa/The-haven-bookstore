import React from 'react';

const Form = () => (
  <div>
    <hr />
    <h2>ADD NEW BOOK</h2>
    <form>
      <input
        type="text"
        placeholder="Book Title"
      />
      <input
        type="text"
        placeholder="Book Author"
      />
      <button
        type="submit"
      >
        ADD BOOK
      </button>
    </form>
  </div>
);

export default Form;
