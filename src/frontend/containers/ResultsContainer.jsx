import React from 'react';
import './ResultsContainer.css';

function ResultsContainer(props) {
  console.log(props);
  return (
    <div className="Results">
      <header className="Results-header">
      <div className="col-md-6">
        {props.response.map(response => {
          return (
            <h1 key={response._id}>{response.name}</h1>
          );
        })}
      </div>
      </header>
    </div>
  );
}

export default ResultsContainer;
