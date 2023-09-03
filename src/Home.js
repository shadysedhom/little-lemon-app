import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'react-router-dom';


function Home() {
  return (
    <div className="main">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
