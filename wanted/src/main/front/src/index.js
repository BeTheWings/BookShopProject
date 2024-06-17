import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import './css/index.css';
import App from './pages/index/App'
import Header from "./layout/Header";
import Footer from "./layout/Footer";

//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Header/>
        <App/>
        <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
