import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Home from './Home.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import Bookingpage from './Bookingpage';
import Confirmed from './Confirmed';

function App() {
    return (

        ReactDOM.render(
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/booking' element={<Bookingpage />}></Route>
                    <Route path='/confirmed' element={<Confirmed />}></Route>
                </Routes>
            </Router>, document.getElementById('root')
        )

    );
  }

  export default App;