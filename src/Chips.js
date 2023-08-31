import React, { useState } from "react";
import HomeLink from "./HomeLink";

const Chips = () => {
  const [chips, setChips] = useState([]);

  const randomGen = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  const handleClick = () => {
    setChips([...chips, `${randomGen(100)}-${randomGen(100)}`]);
  };
  return (
    <div>
      <HomeLink />
      <div className="Chips">
        {" "}
        <button className="Chips-button" onClick={handleClick}>
          NOM NOM NOM
        </button>
      </div>
      {chips.map((cord) => {
        const [x, y] = cord.split("-");
        return (
          <div className="Chips-bag" style={{ top: `${y}vh`, left: `${x}vw` }}>
            {" "}
          </div>
        );
      })}
    </div>
  );
};

export default Chips;
