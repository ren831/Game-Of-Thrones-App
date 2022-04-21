import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import CharacterCard from "./CharacterCard";

function CharacterPage({ characterArr }) {
  return (
    <div>
      <h1>Characters</h1>
      <Card.Group itemsPerRow={10}>{characterArr}</Card.Group>
    </div>
  );
}
export default CharacterPage;
