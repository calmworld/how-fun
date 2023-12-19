import React from 'react'
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden'
import './styles.css'

function ClickBall() {
    const handleButtonClick = () => {
        window.alert('Howdy there!!');
    }

  return (
    <div className='wrapper'>
        <button className='ball' onClick={handleButtonClick}>
            <VisuallyHidden>
                Ball
            </VisuallyHidden>
        </button>
    </div>
  )
}

export default ClickBall


//app.js
// import React from 'react';
// import ClickBall from './ClickBall/ClickBall';

// function App() {
//   return (
//     <div className="app">
//       <ClickBall />
//     </div>
//   )
// }

// export default App;