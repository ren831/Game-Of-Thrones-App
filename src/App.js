import React, { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import CharacterPage from "./CharacterPage";
import CharacterCard from "./CharacterCard";
import { Route } from "react-router-dom";
import Home from "./Home";
import FormList from "./FormList";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((r) => r.json())
      .then((data) => setCharacters(data));
  }, []);

  function addNewCharacter(newCharacter) {
    const updatedCharacter = [...characters, newCharacter];
    setCharacters(updatedCharacter);
  }

  let characterArr = characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  return (
    <Switch>
      <div className="App">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/characters">
          <CharacterPage
            addNewCharacter={addNewCharacter}
            characterArr={characterArr}
          />
        </Route>
        <Route path="/FormList">
          <FormList addNewCharacter={addNewCharacter} />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
