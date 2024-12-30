import React, { useEffect, useState } from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";


const Search = ({onSearch}) => {
  // Etat pour gérer les données renvoyées
  const [listRecipe, setListRecipe] = useState([]);
  // Etat initial pour gérer les objets 
  const [searchTerm, setSearchTerm] = useState("");

  // Récupération des données de recettes
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((json) => {
      setListRecipe(json);
    });
  }, []);

  const handleChange = (value) => {
    setSearchTerm(value);
  }
  
  return (
    <div className="search">
      <div className="search-form">
        <form>
          <input
            type="text"
            value={searchTerm}
            className="input-search"
            placeholder="Trouver une recette"
            onChange={(e) => handleChange(e.target.value)}
          />
          <button className="btn-search">
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
