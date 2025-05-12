// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Indice from './Indice.jsx';  // Asegúrate de importar Indice.jsx correctamente
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/indice" element={<Indice />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


