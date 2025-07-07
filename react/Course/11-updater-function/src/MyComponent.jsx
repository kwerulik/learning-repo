

import React, {useState} from "react";

function MyComponents() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(c => c + 1);
    setCount(c => c + 1);
  }

  const decrease = () => {
    setCount(c => c - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <div className="conter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={increment}>
          {" "}
          +{" "}
        </button>
        <button className="counter-button" onClick={reset}>
          Reset
        </button>
        <button className="counter-button" onClick={decrease}>
          {" "}
          -{" "}
        </button>
      </div>
    </>
  );
}

export default MyComponents