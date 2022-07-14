import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';
import Navigation from './Components/Navigation';
import BookContainer from './Components/BookContainer';
import Categories from './Components/Categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<BookContainer />} />
            <Route exact path="/categories" element={<Categories />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
