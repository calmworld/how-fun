import React from 'react';
import './Graph.css';

export const range = (start, end, step = 1) => {
  let output = [];
  
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  
  return output;
};

function Graph({ from, to }) {

  return (
    <div className="graph">
      {range(from, to + 1, 10).map((num) => (
        <div key={num} className="peg">{num}</div>
      ))}
    </div>
  );
}

export default Graph;

/*
renders in app.js

import React from 'react';
import Graph from './Graph/Graph';

function App() {
  return (
    <Graph from={0} to={40}/>
  );
}

export default App;
*/