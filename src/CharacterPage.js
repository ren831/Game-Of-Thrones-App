import React from "react";
import { Card } from "semantic-ui-react";

function CharacterPage({ characterArr }) {
  return (
    <div>
      <h1>Characters</h1>
      <Card.Group itemsPerRow={10}>{characterArr}</Card.Group>
    </div>
  );
}
export default CharacterPage;
