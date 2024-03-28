import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Franchise from './pages/Franchise';
import Gourmandise from './pages/Gourmandise';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Franchise />} />
        <Route path="/gourmandise" element={<Gourmandise />} />
      </Routes>
    </Router>
  );
}

export default App;