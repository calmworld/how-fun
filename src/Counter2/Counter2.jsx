import {useState} from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash,
} from "react-feather";
import "./styles.css";


function Counter2({ initialVal = 0 }) {
    const [count, setCount] = useState(initialVal);

    const hashCount = Math.floor(Math.random() * 100) + 1;
    const chevronUp = count + 1;
    const chevronsUp = count + 10;
    const chevronsDown = count - 10;
    const chevronDown = count - 1;


  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">{count}</span>
      </p>
      <div className="button-row">
        <button onClick={() => setCount(chevronUp)}>
          <ChevronUp />
          <span className="visually-hidden">Increase slightly</span>
        </button>
        <button onClick={() => setCount(chevronsUp)}>
          <ChevronsUp />
          <span className="visually-hidden">Increase a lot</span>
        </button>
        <button onClick={() => setCount(initialVal)}>
          <RotateCcw />
          <span className="visually-hidden">Reset</span>
        </button>
        <button
          onClick={() => {
            setCount(hashCount);
          }}
        >
          <Hash />
          <span className="visually-hidden">Set to random value</span>
        </button>
        <button onClick={() => setCount(chevronsDown)}>
          <ChevronsDown />
          <span className="visually-hidden">Decrease a lot</span>
        </button>
        <button onClick={() => setCount(chevronDown)}>
          <ChevronDown />
          <span className="visually-hidden">Decrease slightly</span>
        </button>
      </div>
    </div>
  );
}

export default Counter2;
