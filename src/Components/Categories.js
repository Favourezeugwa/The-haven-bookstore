import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../Redux/categories/categories';
import './styles/categories.css';

const Categories = () => {
  const dispatch = useDispatch();

  // declare a global state variable from configureStore categories
  const status = useSelector((state) => state.categories);

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categories-body">
      <button
        type="button"
        className="btn-categories"
        onClick={handleClick}
      >
        Check Status
      </button>
      <p className="status">{status}</p>
    </div>
  );
};
export default Categories;
