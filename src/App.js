import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div classname="mainContainer">
        <Routes>
        {/* <Switch> */}
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
        {/* </Switch> */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
