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
        "https://api.freeapi.app/api/v1/public/meals"
      );
      setRecipes(response.data.data.data);
    } catch (error) {
      setErr("Erreur de récupération des recettes", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
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
        {loading && <p>chargement...</p>}
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
