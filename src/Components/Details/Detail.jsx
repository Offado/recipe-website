import React from "react";
import "./detail.css";
import { useParams } from "react-router";
import cards from "../../Data/Cards";
import { ul } from "framer-motion/client";

const Detail = () => {
  // Fonction de lien de navigation sur les détails de recette
  const recipeId = useParams().id;
  const recipes = cards.find((element) => {
    return element.id == recipeId;
  });

  return (
    <section id="details" className="skill">
      <div className="col detail-image">
        <img src={recipes.image} alt="" />
      </div>
      <div className="col detail-recipe">
        <h1>{recipes.name}</h1>
        <p>
          Repas: <b>{recipes.gender}</b>
        </p>
      </div>
      <div className="ingredients">
        <h4 className="h4">Ingrédients</h4>
        <p>{recipes.ingrédient1} <b>{recipes.mesure1}</b></p>
        <p>{recipes.ingrédient2} <b>{recipes.mesure2}</b></p>
        <p>{recipes.ingrédient3} <b>{recipes.mesure3}</b></p>
        <p>{recipes.ingrédient4} <b>{recipes.mesure4}</b></p>
        <p>{recipes.ingrédient5} <b>{recipes.mesure5}</b></p>
        <p>{recipes.ingrédient6} <b>{recipes.mesure6}</b></p>
        <p>{recipes.ingrédient7} <b>{recipes.mesure7}</b></p>
        <p>{recipes.ingrédient8} <b>{recipes.mesure8}</b></p>
        <p>{recipes.ingrédient9} <b>{recipes.mesure9}</b></p>
        <p>{recipes.ingrédient10} <b>{recipes.mesure10}</b></p>
        <p>{recipes.ingrédient11} <b>{recipes.mesure11}</b></p>
        <p>{recipes.ingrédient12} <b>{recipes.mesure12}</b></p>
        <p>{recipes.ingrédient13} <b>{recipes.mesure13}</b></p>
        <p>{recipes.ingrédient14} <b>{recipes.mesure14}</b></p>
        <p className="timing">Durée du repas: <b>{recipes.duration}</b></p>
      </div>
    </section>
  );
};

export default Detail;
