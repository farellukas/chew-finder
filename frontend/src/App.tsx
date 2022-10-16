import React from 'react';
import Hero from './containers/Hero';
import Discover from './containers/Discover'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="bg-primary">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
