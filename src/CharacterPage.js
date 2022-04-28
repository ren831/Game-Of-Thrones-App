import React from "react";
import { Card } from "semantic-ui-react";

function CharacterPage({ characterArr, addNewCharacter }) {
  return (
    <main>
      <ul>
        <Card.Group itemsPerRow={10}>{characterArr}</Card.Group>
      </ul>
    </main>
  );
}
export default CharacterPage;
