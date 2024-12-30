import React, { useEffect, useState } from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const Search = () => {
  // Etat pour stocker les recettes depuis l'Api
  const [listRecipe, setListRecipe] = useState([]);
  // Etat pour stocker les recettes filtrées
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  // Etat initial pour gérer les objets
  const [searchTerm, setSearchTerm] = useState("");
  // Etat de chargement
  const [loading, setLoading] = useState(true);
  // Etat pour gérer les erreurs
  const [err, setErr] = useState(null);

  // Récupération des données de recettes
  useEffect(() => {
    // Fonction de promesse pour obtenir les données
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.freeapi.app/api/v1/public/meals"
        );
        console.log(response.data.data.data); // Met à jour les données recettes
        setFilteredRecipes(response.data.data.data); // Initialise les recettes filtrées
      } catch (error) {
        setErr("Erreur de récupération de recettes", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Gérer la recherche et le tri
  useEffect(() => {
    const filtered = listRecipe.filter((list) =>
      list.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [searchTerm, listRecipe]);

  // Fonction de mise à jour de recettes
  const handleChange = (value) => {
    setSearchTerm(value);
  };

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
         {/* Affichage des recettes */}
         {loading && <p>Chargement...</p>}
        {err && <p>{err}</p>}
        <ul>
          {
            filteredRecipes.length > 0 ? (
              filteredRecipes.map((item) => (
                <li key={item.idMeal}>{item.strMeal}</li>
              ))
            ) : (
              <p>Aucune rectte trouvée</p>
            )
          }
        </ul>
      </div>
    </div>
  );
};

export default Search;
