import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import AboutMe from './components/AboutMe';
import ContactScreen from './components/ContactScreen';
import PortfolioScreen from './components/PortfolioScreen';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<PortfolioScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
