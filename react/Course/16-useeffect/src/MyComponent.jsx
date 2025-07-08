import { useEffect } from "react";
import { useState } from "react"


function MyComponent() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count]);

  function addCount() {
    setCount(c => c + 1);
  }

  function substractCount() {
    setCount((c) => c - 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={substractCount}>Substract</button>
    </>
  );
}

export default MyComponent