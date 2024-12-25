import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        className="input-search"
        placeholder="Trouver une recette"
      />
    </div>
  );
};

export default Search;
