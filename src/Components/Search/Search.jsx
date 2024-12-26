import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <form>
          <input
            type="text"
            className="input-search"
            placeholder="Trouver une recette"
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
