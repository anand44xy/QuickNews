import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" country="us" category="general" />} />
          <Route path="/business" element={<News key="business" country="us" category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" country="us" category="entertainment" />} />
          <Route path="/health" element={<News key="health" country="us" category="health" />} />
          <Route path="/science" element={<News key="science" country="us" category="science" />} />
          <Route path="/sports" element={<News key="sports" country="us" category="sports" />} />
          <Route path="/technology" element={<News key="technology" country="us" category="technology" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
