import React, { useState } from 'react';
import Hero from './containers/Hero';
import Discover from './containers/Discover'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Results from './containers/Results';

function App() {
  const [term, setTerm] = useState("")
  const [coords, setCoords] = useState([])

  return (
    <Router>
      <div className="bg-primary">
        <Routes>
          <Route path="/" element={<Hero coords={coords} setCoords={setCoords} />} />
          <Route path="/discover" element={<Discover term={term} setTerm={setTerm} coords={coords} setCoords={setCoords} />} />
          <Route path="/results" element={<Results term={term} coords={coords} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
