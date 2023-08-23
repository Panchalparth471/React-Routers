 import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import React from 'react';
import NotFound from './NotFound';
import Home from './Home';
import Lab from './Labs.js';
import Sup from './Sup';
import MainHeader from './MainHeader';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
         <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li>
          <li><NavLink to="/NotFound">NotFound</NavLink></li>
        </ul>
      </nav> 




      <Routes>
        <Route path="/" element ={<MainHeader></MainHeader>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/support" element={<Sup></Sup>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/labs" element={<Lab></Lab>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
