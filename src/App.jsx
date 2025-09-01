import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './global.scss';
import Header from './shared/header';
import Footer from './shared/footer';
import Main from './main';
import Imprint from './legallinks/imprint';
import { TranslationProvider } from './services/useTranslation';
import Privacy from './legallinks/privacy';
function App() {
  return (
    <TranslationProvider>
      <Router>
        <div className='mainContent'>
          <div className='placeholder'></div>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/imprint' element={<Imprint />} />
            <Route path='/privacy' element={<Privacy />} />
          </Routes>
          <Footer />
        </div>

      </Router>
    </TranslationProvider>
  );
}

export default App;
