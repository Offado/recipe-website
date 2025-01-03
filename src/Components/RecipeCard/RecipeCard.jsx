import React from "react";
import "./recipeCard.css";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card-container">
      <div className="card-items">
        <h3 className="card-title">{recipe.strMeal}</h3>
        <div className="card-recipe">
          <div className="card-image">
            <img src={recipe.strMealThumb} className="card-img" alt="" />
          </div>
          <div className="card-data">
            <div className="card-data-description">
              <span className="card-category">{recipe.strCategory}</span>
            </div>
            <Link to={`/Details/Detail/${recipe.id}`} className="link-card">
              <span className="card-span">Découvre la recette</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
