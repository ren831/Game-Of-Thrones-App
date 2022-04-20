import React, { useState, useEffect } from "react";

function CharacterPage() {
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <h1>Characters</h1>
    </div>
  );
}
export default CharacterPage;
