import React from "react";
import CharacterCard from "./CharacterCard";
import { Container } from "semantic-ui-react";
import Search from "./Search";

function Houses({ characterArr, setSearch }) {
  return (
    <Container>
      <h1>Search by House</h1>
      <br />
      <Search setSearch={setSearch} />
      <br />
    </Container>
  );
}

export default Houses;
