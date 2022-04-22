import React, { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Router, Switch } from "react-router-dom";
import CharacterPage from "./CharacterPage";
import Houses from "./Houses";
import CharacterCard from "./CharacterCard";
import { Route } from "react-router-dom";
import Home from "./Home";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/characters?_limit=20")
      .then((r) => r.json())
      .then((data) => setCharacters(data));
  }, []);

  let characterArr = characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  return (
    <Switch>
      <div className="App">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/character">
          <CharacterPage characterArr={characterArr} />
        </Route>
        <Route path="/houses">
          <Houses characterArr={characterArr} />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
