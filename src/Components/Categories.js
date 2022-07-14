import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../Redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  // declare a global state variable from configureStore categories
  const status = useSelector((state) => state.categories);

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
      >
        Check Status
      </button>
      <p>{status}</p>
    </>
  );
};
export default Categories;
