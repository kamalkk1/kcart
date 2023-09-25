// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import InfoPage from './components/InfoPage';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
    
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/info/:productId" component={InfoPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
