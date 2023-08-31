import React, { useState } from "react";
import HomeLink from "./HomeLink";

const Candy = () => {
  const [cord, setCord] = useState([50, 50]);

  const randomGen = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const handleClick = () => {
    setCord([randomGen(), randomGen()]);
  };
  return (
    <div>
      <HomeLink />
      <h2>Come on grab your candy!</h2>
      <div
        onClick={handleClick}
        className="Candy-bar"
        style={{ top: `${cord[0]}vh`, left: `${cord[1]}vw` }}
      ></div>
    </div>
  );
};

export default Candy;
