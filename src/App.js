import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
