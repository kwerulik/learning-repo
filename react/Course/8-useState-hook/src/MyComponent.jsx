import React, {useState} from "react"

function MyComponent () {
  const [name, setName] = useState();
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState();


  const updateName = () => {
    setName('Bob');
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Set age</button>

        <p>Is employed: {isEmployed ? 'yes' : 'no'}</p>
        <button onClick={toggleEmployedStatus}>Toggle status</button>
      </div>
    </>
  );
}

export default MyComponent