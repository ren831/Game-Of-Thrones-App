import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function CharacterCard({ character }) {
  console.log(character.family);
  return (
    <Card>
      <Image src={character.imageUrl} alt={character.image} />
      <Card.Content>
        <Card.Header>{character.firstName}</Card.Header>
        <Card.Meta>{character.fullName}</Card.Meta>
        <Card.Description>{character.title}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {character.family}
        </a>
      </Card.Content>
    </Card>
  );
}

export default CharacterCard;
