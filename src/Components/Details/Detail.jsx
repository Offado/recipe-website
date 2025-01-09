import React, { useEffect, useState } from "react";
import "./detail.css";
import { Link, useParams } from "react-router";
import axios from "axios";
import { MdArrowForwardIos } from "react-icons/md";


const Detail = () => {
  // Listes des cartes de recettes
  const [recipeDetails, setRecipeDetails] = useState({});

  // Fonction de lien de navigation sur les détails de recette
  const recipeId = useParams().id;

  const fetchRecipeDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.freeapi.app/api/v1/public/meals/${recipeId}`
      );
      setRecipeDetails(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchRecipeDetails();
  });

  return (
    <>
      <div className="header-details">
        <ul>
          <li>
            <Link to="/" className="icon-accueil">
              <span className="a1">accueil <span><MdArrowForwardIos className="iac1" size={12} /></span> </span> 
            </Link> 
          </li>
          <li>
            <Link to="/Recipes/Recipe" className="icon-recipe">
              <span className="rec1">recettes <span><MdArrowForwardIos className="ir1" size={12} /></span> </span>
            </Link>
          </li>
        </ul>
      </div>
      <section id="details" className="skill">
        <h1>{recipeDetails.strMeal}</h1>
        <div className="col detail-image">
          <img src={recipeDetails.strMealThumb} alt="" />
        </div>
        <div className="col detail-recipe">
          <p className="pag">
            Catégorie: <b>{recipeDetails.strCategory}</b>
          </p>
        </div>
        <div className="ingredients">
          <h4 className="h4">Ingredients</h4>
          <p className="pag">
            {recipeDetails.strIngredient1}: <b>{recipeDetails.strMeasure1}</b>
          </p>
          <p className="page">
            {recipeDetails.strIngredient2}: <b>{recipeDetails.strMeasure2}</b>
          </p>
          <p className="page">
            {recipeDetails.strIngredient3}: <b>{recipeDetails.strMeasure3}</b>
          </p>
          <p className="page">
            {recipeDetails.strIngredient4}: <b>{recipeDetails.strMeasure4}</b>
          </p>
          <p className="page">
            {recipeDetails.strIngredient5}: <b>{recipeDetails.strMeasure5}</b>
          </p>
          <p className="page">
            {recipeDetails.strIngredient6}: <b>{recipeDetails.strMeasure6}</b>
          </p>
          <p className="page">
            {recipeDetails.strIngredient7}: <b>{recipeDetails.strMeasure7}</b>
          </p>
          <p className="page">
            {recipeDetails.strIngredient8}: <b>{recipeDetails.strMeasure8}</b>
          </p>
          <p className="page">
            {recipeDetails.strIngredient9}: <b>{recipeDetails.strMeasure9}</b>
          </p>
          <p className="page">
            {recipeDetails.strIngredient10}: <b>{recipeDetails.strMeasure10}</b>
          </p>
          <p className="page">
            {recipeDetails.strIngredient11}: <b>{recipeDetails.strMeasure11}</b>
          </p>
          <p className="page">
            {recipeDetails.strIngredient12}: <b>{recipeDetails.strMeasure12}</b>
          </p>
          <p className="page">
            {recipeDetails.strIngredient13}: <b>{recipeDetails.strMeasure13}</b>
          </p>
          <p className="page">
            {recipeDetails.strIngredient14}: <b>{recipeDetails.strMeasure14}</b>
          </p>
        </div>
        <div className="instructions">
          <h3>Instructions</h3>
          <p>{recipeDetails.strInstructions}</p>
        </div>
      </section>
    </>
  );
};

export default Detail;
