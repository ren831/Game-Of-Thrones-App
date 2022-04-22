import React, { useState } from "react";

function Search({ setSearch, characterArr }) {
  const [searchInput, setSearchInput] = useState("");
  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <form className="searchbar" onSubmit={handleChange}>
      <input
        type="text"
        id="search"
        placeholder="Search by House"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
