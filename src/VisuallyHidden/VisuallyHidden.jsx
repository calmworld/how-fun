import React from 'react';

const hiddenStyles = {
  display: 'inline-block',
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
};

export function VisuallyHidden({ children }) {
  return (
    <span style={hiddenStyles}>
      {children}
    </span>
  );
}

/*
render in app.js

import './App.css';
import { VisuallyHidden } from './VisuallyHidden';

function Friend({ name, isOnline }) {
  return (
    <li className="friend">
      {isOnline && <div className="green-dot" />}
      {name}
      {!isOnline && <VisuallyHidden>(Offline)</VisuallyHidden>}
      {isOnline && <VisuallyHidden>(Online)</VisuallyHidden>}
    </li>
  );
}


function App() {
  return (
    <ul className="friend-list">
      <Friend name="Andrew" isOnline={false} />
      <Friend name="Beatrice" isOnline={true} />
      <Friend name="Chen" isOnline={true} />
    </ul>
  );
}

export default App;

*/