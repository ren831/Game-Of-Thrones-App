import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import CharacterPage from "./CharacterPage";
import Houses from "./Houses";
import CharacterCard from "./CharacterCard";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/characters?_limit=10")
      .then((r) => r.json())
      .then((data) => setCharacters(data));
  }, []);

  let characterArr = characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  return (
    <div className="App">
      <NavBar />
      <CharacterPage characterArr={characterArr} />
      <Houses characterArr={characterArr} />
    </div>
  );
}

export default App;
