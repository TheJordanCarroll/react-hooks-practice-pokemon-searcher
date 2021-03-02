import React from "react";

function Search({search, newSearchTerm}) {
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={search} onChange={(e) => newSearchTerm(e.target.value)} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
