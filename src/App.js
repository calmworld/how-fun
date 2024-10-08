import React from 'react';
import Toggle from './Toggle/Toggle';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  console.log('isDarkMode:', isDarkMode);

  return (
    <div>
      <h1>Playing with React Application</h1>
      <div
      className="wrapper"
      style={{
        // NOTE: This is a just-for-fun mini demo, not a
        // full-featured Dark Mode implementation!
        '--color-bg': isDarkMode ? 'black' : 'white',
        '--color-text': isDarkMode ? 'white' : 'black',
      }}
    >
      <Toggle
        label="Dark Mode"
        checked={isDarkMode}
        handleToggle={setIsDarkMode}
      />
    </div>
    </div>
  )
}

export default App;