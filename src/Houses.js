import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import Search from "./Search";
import { Card } from "semantic-ui-react";

function Houses({ characterArr }) {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <h1>Search by House</h1>
      <br />
      <Search setSearch={setSearch} />
      <br />
      <Card.Group itemsPerRow={10}>{characterArr}</Card.Group>
    </Container>
  );
}

export default Houses;
