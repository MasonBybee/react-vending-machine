import { Link, NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Vending Machine
      </NavLink>
      <NavLink exact to="/Candy">
        Candy
      </NavLink>
      <NavLink exact to="/Soda">
        Soda
      </NavLink>
      <NavLink exact to="/Chips">
        Chips
      </NavLink>
    </nav>
  );
};

export default Navbar;
