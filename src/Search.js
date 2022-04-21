import React from "react";

function Search({ setSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={setSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
