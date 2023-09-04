import { Route, Routes, useNavigate } from 'react-router-dom';

import Bookingform from './Bookingform.js'
import Header from './Header.js'
import Footer from './Footer.js';

import './App.css';
import { useReducer, useState } from 'react';


export default function Bookingpage() {

    return(
        <div className='main'>
            <Header />
            <Bookingform  />
            <Footer />
        </div>
    );
}