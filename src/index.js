// src/index.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Importamos BrowserRouter
import App from './App';

ReactDOM.render(
  <BrowserRouter> {/* Envuelve App con BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
