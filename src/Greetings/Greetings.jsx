import React from 'react';

export function Greetings({ themeColor, children }) {
  return (
    <div>
    <button
       style={{
        border: '2px solid',
        color: themeColor,
        borderColor: themeColor,
        background: 'white',
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
  >
    {children}
  </button>
</div>
);
}

/*
renders on App.jsx

import './App.css';
import { Greetings } from './Greetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greetings themeColor='red'>Cancel</Greetings>
        <Greetings themeColor='blue'>Confirm</Greetings>
      </header>
    </div>
  );
}

export default App;

*/