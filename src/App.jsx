import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import ThankYou from './ThankYou';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* The main portfolio page */}
        <Route path="/" element={<Portfolio />} />
        {/* The success page after contact */}
        <Route path="/thanks" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;