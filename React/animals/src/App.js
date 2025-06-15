import React, { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function App() {
  const [animals, setAnimals] = useState([]);

  const getRandomAnimal = () => {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
  };

  console.log(getRandomAnimal());

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => (
    <AnimalShow type={animal} key={index} />
  ));

  return (
    <div className="app">
      <button onClick={handleClick}>Dodaj zwierzaka</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
