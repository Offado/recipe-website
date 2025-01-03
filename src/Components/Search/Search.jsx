import React, { useEffect, useState } from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Recipe from "../Recipes/Recipe";
import { Link } from "react-router";

const Search = () => {
  // Etat pour stocker les recettes depuis l'Api
  const [listRecipe, setListRecipe] = useState([]);
  // Etat initial pour gérer les objets
  const [searchTerm, setSearchTerm] = useState("");
  // Etat de chargement
  const [loading, setLoading] = useState(true);
  // Etat pour gérer les erreurs
  const [err, setErr] = useState(null);

  // Fonction de promesse pour obtenir les données
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.freeapi.app/api/v1/public/meals"
      );
      console.log(response.data.data.data); // Met à jour les données recettes
      setListRecipe(response.data.data.data); // Initialise les recettes filtrées
    } catch (error) {
      setErr("Erreur de récupération de recettes", error);
    } finally {
      setLoading(false);
    }
  };

  // Récupération des données de recettes
  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div className="search">
      <div className="search-form">
        <form>
          <input
            type="text"
            value={searchTerm}
            className="input-search"
            placeholder="Trouver une recette"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn-search">
            <FaSearch />
          </button>
        </form>
        {/* Affichage des recettes */}
        {loading && <p>Chargement...</p>}
        {err && <p>{err}</p>}
        <div>
          {
            listRecipe.filter((item) => {
              if(searchTerm === ""){
                return item;
              }
              else if(item.strMeal.toLowerCase().includes(searchTerm.toLowerCase())){
                return item;
              }
            })
            .map((item) => (
              <Link>
                <p className="recipe-item" key={item.idMeal}>{item.strMeal}</p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Search;
