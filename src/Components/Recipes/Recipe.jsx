import React, { useEffect, useState } from "react";
import "./recipe.css";
import Search from "../Search/Search";
import Header from "../Header/Header";
import FooterPage from "../Footer/Footer";
import RecipeCard from "../RecipeCard/RecipeCard";
import axios from "axios";

const Recipe = () => {
  // Listes des recettes
  const [recipes, setRecipes] = useState([]);
  // Etat de chargement
  const [loading, setLoading] = useState(true);
  // Etat pour gérer les erreurs
  const [err, setErr] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        "https://api.freeapi.app/api/v1/public/meals?page=1&limit=21"
      );
      setRecipes(response.data.data.data); // Met à jour les recettes
    } catch (error) {
      setErr("Erreur de récupération des recettes", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes(); // Initialise les recettes
  }, []);

  return (
    <div>
      <div className="recipe-header">
        <Header />
      </div>
      {/* Barre de recherche de recettes */}
      <div className="search">
        <Search />
      </div>
      <div className="recipe-card items">
        {loading && <p>Veuillez patienter pour le chargement...</p>}
        {err && <p>{err}</p>}
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
      <div className="recipe-footer">
        <FooterPage />
      </div>
    </div>
  );
};

export default Recipe;
