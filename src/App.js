import React from 'react';
import BusinessContainer from "./frontend/containers/BusinessContainer.jsx";
import CharityContainer from "./frontend/containers/CharityContainer.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="col-md-6">
        <h1> Charity </h1>
        <CharityContainer />
      </div>
      </header>
    </div>
  );
}

export default App;
