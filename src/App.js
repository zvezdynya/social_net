import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        <Nav />
        <main className='profile'>
          <Routes>
            <Route path="/profile" 
            element={<Profile />}/>
          </Routes>
          <Routes>
            <Route path="/dialogs" 
            element={<Dialogs />}/>
          </Routes>
          <Routes>
            <Route path="/news" 
            element={<News />}/>
          </Routes>
          <Routes>
            <Route path="/music" 
            element={<Music />}/>
          </Routes>
          <Routes>
            <Route path="/settings" 
            element={<Settings />}/>
          </Routes>
          
          
          {/* <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/> */}
        </main>
      </div>
  );
}

export default App;
