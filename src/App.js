import React from 'react';
import BusinessContainer from "./frontend/containers/BusinessContainer.jsx";
import CharityContainer from "./frontend/containers/CharityContainer.jsx";
import LandingContainer from "./frontend/containers/LandingContainer.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="col-md-6">
        <LandingContainer />
      </div>
      </header>
    </div>
  );
}

export default App;
