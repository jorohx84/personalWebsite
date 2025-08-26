import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './global.scss';
import Header from './header';
import Footer from './footer';
import Main from './main';
function App() {
  return (
    <Router>
      <div className='mainContent'>
        <div className='placeholder'></div>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
