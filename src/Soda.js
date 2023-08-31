import React from "react";
import { withRouter } from "react-router-dom";
import HomeLink from "./HomeLink";

const Soda = () => {
  return (
    <>
      <HomeLink />
      <h2>Drink Up!</h2>
      <div className="rotating Soda-bottle"></div>
    </>
  );
};

export default Soda;
