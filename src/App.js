import React from 'react';
import './App.css';
import BigCoin from './BigCoin/BigCoin';


function App() {
  const [numOfCoins, setNumOfCoins] = React.useState(0);
  return (
    <div className="wrapper">
      <main>
        <BigCoin 
          numOfCoins={numOfCoins}
          setNumOfCoins={setNumOfCoins}
        />
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
    </div>
  );
}

export default App;