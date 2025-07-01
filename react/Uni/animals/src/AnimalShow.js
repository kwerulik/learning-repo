import bird from "./img/bird.svg";
import cat from "./img/cat.svg";
import cow from "./img/cow.svg";
import dog from "./img/dog.svg";
import gator from "./img/gator.svg";
import horse from "./img/horse.svg";

import heart from "./img/heart.svg";

import { useState } from "react";

import "./AnimalShow.css";

const svgMap = { bird, cat, cow, dog, gator, horse };

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div onClick={handleClick} className="animal-show">
      <img src={svgMap[type]} alt={type} className="animal" />
      <img
        src={heart}
        alt="Heart"
        style={{ width: 20 + 10 * clicks }}
        className="heart"
      />
    </div>
  );
}

export default AnimalShow;
