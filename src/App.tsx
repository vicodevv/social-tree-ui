import React from 'react';
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import Admin from './pages/Admin/Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
