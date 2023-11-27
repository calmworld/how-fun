import React from 'react';
import './Grid.css';

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

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(numRows).map((row) => (
        <div key={row} className="row">
          {range(numCols).map((col) => (
            <div key={col} className="cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;

/*
renders in app.js

import React from 'react';
import Grid from './Grid/Grid';

function App() {
  return (
    <Grid
      numRows={8}
      numCols={6}
    />
  );
}

export default App;
*/