import React from "react";
import "./recipeCard.css";
import Image from "../CustomImage/Image";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card-container">
      <div className="card-items">
        <h3>{recipe.strMeal}</h3>
        <div className="description-card">
          <div className="card-image">
            <Image imgSrc={recipe.strMealThumb} pt="70%" />
          </div>
          <p>{recipe.strInstructions}</p>
          <Link to={`/Details/Detail/${recipe.id}`} className="link-card">
            <span className="card-span">Découvre la recette</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
