import React from "react";
import { Card } from "semantic-ui-react";
import NavBar from "./NavBar";
import FormList from "./FormList";

function CharacterPage({ characterArr, addNewCharacter }) {
  return (
    <main>
      <NavBar />
      <h1>Characters Page</h1>
      <FormList addNewCharacter={addNewCharacter} />
      <ul>
        <Card.Group itemsPerRow={10}>
          {characterArr} {addNewCharacter}
        </Card.Group>
      </ul>
    </main>
  );
}
export default CharacterPage;
