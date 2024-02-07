import './App.css';
import Valentine from './Valentine';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YesMessage from './YesMessagePage';
import backgroundImage from './images/background.jpg';
import Landing from './Landing';

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';

    document.body.style.height = '100vh';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';

    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.height = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} exact />
        <Route path='/Valentines' element={<Valentine />} />
        <Route path='/Yes-message' element={<YesMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
