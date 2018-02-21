import React, { Component } from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import Body from '../Body';
import './App.css';

const App = () => (
  <div className="App">
    <SideBar />
    <div className="Main">
      <Header />
      <Body />
    </div>
  </div>
);
export default App;
