import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/page6';
import Page7 from './pages/page7';
import Page8 from './pages/page8';
import Page9 from './pages/page9';
import Page10 from './pages/page10';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Layout from './layout.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout><LandingPage /></Layout>} />
          <Route path="/page1" element={<Layout><Page1 /></Layout>} />
          <Route path="/page2" element={<Layout><Page2 /></Layout>} />
          <Route path="/page3" element={<Layout><Page3 /></Layout>} />
          <Route path="/page4" element={<Layout><Page4 /></Layout>} />
          <Route path="/page5" element={<Layout><Page5 /></Layout>} />
          <Route path="/page6" element={<Layout><Page6 /></Layout>} />
          <Route path="/page7" element={<Layout><Page7 /></Layout>} />
          <Route path="/page8" element={<Layout><Page8 /></Layout>} />
          <Route path="/page9" element={<Layout><Page9 /></Layout>} />
          <Route path="/page10" element={<Layout><Page10 /></Layout>} />
          <Route path="/signin" element={<Layout><Signin /></Layout>} />
          <Route path="/signup" element={<Layout><Signup /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;