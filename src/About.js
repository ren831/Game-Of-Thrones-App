import React from "react";
import NavBar from "./NavBar";

function About() {
  const mystyle = {
    float: "left",
    width: "50%",
    padding: "5px",
    height: "600px",
  };
  const mystyleRight = {
    float: "right",
    width: "50%",
    padding: "5px",
    height: "600px",
  };
  return (
    <div>
      <NavBar />
      <h1>About Game of Thrones </h1>
      <p>
        George R.R. Martin's best-selling book series "A Song of Ice and Fire"
        is brought to the screen as HBO sinks its considerable storytelling
        teeth into the medieval fantasy epic. It's the depiction of two powerful
        families -- kings and queens, knights and renegades, liars and honest
        men -- playing a deadly game for control of the Seven Kingdoms of
        Westeros, and to sit atop the Iron Throne.
      </p>

      <h2>About the app</h2>
      <p>
        With simplicity in mind, this App not only allows you to see the
        characters of Game of Thrones, but information about them. You can see
        their name(full, first, and last), their title and also which family
        they belong to. You can also add new characters as the characters grow
        with the addition of new seasons and spin offs.
      </p>
      <ul>
        <img
          style={mystyle}
          src="https://mypostercollection.com/wp-content/uploads/2018/08/Game-Of-Thrones-Poster-MyPosterCollection.com-60-724x1024.jpg"
        />
        <img
          style={mystyleRight}
          src="https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_1284,w_844/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2019%2F02%2Fmgot_s8_character_art_jon_snow.jpg"
        />
      </ul>
    </div>
  );
}

export default About;
