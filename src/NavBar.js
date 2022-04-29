import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const mystyle = {
    padding: "10px",
    fontFamily: "Arial",
    fontsize: "10px",
    fontweight: "bold",
  };

  return (
    <div className="NavBar">
      <NavLink to="/" style={mystyle}>
        Home
      </NavLink>
      <NavLink to="/characters" style={mystyle}>
        Characters
      </NavLink>
      <NavLink to="/About" style={mystyle}>
        About
      </NavLink>
    </div>
  );
}

export default NavBar;
