import React from "react";

function NavBar() {
  const mystyle = {
    padding: "10px",
    fontFamily: "Arial",
    fontsize: "10px",
    fontweight: "bold",
  };

  return (
    <div className="NavBar">
      <span style={mystyle}>Home</span>
      <span style={mystyle}>Characters</span>
      <span style={mystyle}>Houses</span>
    </div>
  );
}

export default NavBar;
