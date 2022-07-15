import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './Components/Navigation';
import BookContainer from './Components/BookContainer';
import Categories from './Components/Categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<BookContainer />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
