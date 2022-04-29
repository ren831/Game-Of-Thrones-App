import React from "react";
import NavBar from "./NavBar";

function Home() {
  const mystyle = {
    float: "left",
    padding: "5px",
    height: "500px",
  };
  return (
    <div>
      <NavBar />
      <h1>Welcome To Game Of Thrones App</h1>
      <img
        style={mystyle}
        src="https://www.teahub.io/photos/full/52-528521_game-of-thrones-poster-hd-wallpaper-with-high.jpg"
      />
    </div>
  );
}

export default Home;
