import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import About from './pages/About';
import Home from './pages/Home'
import Blog from './pages/Blog';

function App() {
  return(
    <BrowserRouter>
    <nav> 
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />

      </Routes>
    </BrowserRouter> 
  )
}

/*
function Home() {
  return(
    <div>
      <h2>Test A</h2>
    </div>
  )
}
function About() {
  return(
    <div>
      <h2>Test B</h2>
    </div>
  )
}


function Blog() {
  return(
    <div>
      <h2>Test C</h2>
    </div>
  )
}
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*

*/
