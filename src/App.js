import React from 'react';
import ColorGradiant from './ColorGradiant/ColorGradiant';
import './App.css';
import { VisuallyHidden } from './VisuallyHidden';
import StickerPad from './StickerPad/StickerPad';

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
    <div className="app">
      <ColorGradiant />
      {/* <div>
        <ul className="friend-list">
          <Friend name="Andrew" isOnline={false} />
          <Friend name="Beatrice" isOnline={true} />
          <Friend name="Chen" isOnline={true} />
        </ul>
      </div> */}
      <div>
        <h1>Sticker Pad</h1>
        <p>Click on the stickers to add them to the canvas!</p>
        <StickerPad />
      </div>
    </div>
  )
}

export default App;