import './App.css';
import Header from './Header.js';
// import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="main">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
