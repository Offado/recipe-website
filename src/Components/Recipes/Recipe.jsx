import React, { useState } from "react";
import "./recipe.css";
import Search from "../Search/Search";
import Header from "../Header/Header";
import FooterPage from "../Footer/Footer";
import RecipeCard from "../RecipeCard/RecipeCard";
import cards from "../../Data/Cards";

const Recipe = () => {
  // Etat pour gérer les données renvoyées
  const [listRecipe, setListRecipe] = useState("");

  


  return (
    <div>
      <div className="recipe-header">
        <Header />
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="recipe-card items">
        {
          cards.map((card, index) => (
            <RecipeCard key={index} recipe={card} />
          ))
        }
      </div>
      <div className="recipe-footer">
        <FooterPage />
      </div>
    </div>
  );
};

export default Recipe;
