import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './Movies';
import Detail from './Detail';
// import Home from './Home';
// import FetchData from './FetchData';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Movies />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/fetchdata" element={<FetchData />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
