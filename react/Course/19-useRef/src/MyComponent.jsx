import { useRef } from "react";
import { useEffect } from "react";


function MyComponent () {
  // let [number, setNumber] = useState(0);

  const ref = useRef(0);

  useEffect(() => {
    console.log('component rendered')
  });

  function handleClick() {
    ref.current++;
    console.log(ref.current);
  }

  return(
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default MyComponent