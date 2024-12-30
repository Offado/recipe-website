import React, { useEffect, useState } from "react";
import "./detail.css";
import { useParams } from "react-router";
import axios from "axios";


const Detail = () => {
  // Listes des cartes de recettes
  const cards = [
    {
      id: 1,
      image: "/meals/Kedjenou.jpg",
      name: "Sauce Kedjenou Poulet",
      gender: "Abbey",
      description:
        "La sauce kedjenou est une cuisine du peuple abbey c'est un repas que l'on peut manger avec du foutou et du riz.",
      strIngredient1: "Ail",
      strIngredient2: "Tomate(s)",
      strIngredient3: "Poulet",
      strIngredient4: "Laurier",
      strIngredient5: "Brins de percils",
      strIngredient6: "Oignon vert",
      strIngredient7: "Aubergine",
      strIngredient8: "Piments",
      strIngredient9: "Sel",
      strIngredient10: "Poivre",
      strMeasure1: "5 gousses",
      strMeasure2: "3",
      strMeasure3: "1",
      strMeasure4: "3 feuilles",
      strMeasure5: "5",
      strMeasure6: "1",
      strMeasure7: "1",
      strMeasure8: "10 (facultatif)",
      duration: "1 heure",
    },
    {
      id: 2,
      image: "/meals/KiyaAyra.jpg",
      name: "Sauce Kiya Ayra",
      gender: "Abidji",
      description: "La sauce Kiya Ayra est une cuisine du peuple Abidji.",
      strIngredient1: "Escargots (les gros de préférences)",
      strIngredient2: "Huile rouge",
      strIngredient3: "Piment vert (mankou flolo)",
      strIngredient4: "Oignon",
      strIngredient5: "Piments frais rouge",
      strIngredient6: "Câblé",
      strIngredient7: "Aubergine",
      strIngredient8: "Sel",
      strIngredient9: "maggi (optionnel)",
      duration: "1 heure 30 minutes",
    },
    {
      id: 3,
      image: "/meals/Placali_Abouré.jpg",
      name: "Placali Abouré",
      gender: "Abouré",
      description:
        "Le placali abouré est un repas spécial chez les abourés qui est un délice dans les restaurants d'abidjan.",
      strIngredient1: "Gombo frais",
      strIngredient2: "Piment",
      strIngredient3: "Tomate fraiche",
      strIngredient4: "Huile rouge",
      strIngredient5: "Viande de bœuf",
      strIngredient6: "Poisson fumé",
      strIngredient7: "Tripes",
      strIngredient8: "Crabe",
      strIngredient9: "Oignons",
      strIngredient10: "Feuille de kplala (lalo)",
      strIngredient11: "Cube maggi",
      strIngredient12: "Placali",
      strIngredient13: "Potasse",
      duration: "1 heure",
    },
    {
      id: 4,
      image: "/meals/Apésié.jpg",
      name: "Le Apésié",
      gender: "Abron",
      description:
        "C'est un repas de festivité chez les abron que vous pouvez faire chez vous à la maison. Au Ghana, ce plat est conseillé par les médecins pour les personnes qui souffrent de l'anémie.",
      strIngredient1: "Feuilles de tarots fraiches (N'godomiré en Abron)",
      strIngredient2: "Piment",
      strIngredient3: "Tomate fraiche",
      strIngredient4: "Huile rouge",
      strIngredient5: "Adjouvan ou poisson séché",
      strIngredient6: "Banane plantain",
      strIngredient7: "Avocats",
      strIngredient8: "Poisson frais",
      duration: "1 heure 30 minutes",
    },
    {
      id: 5,
      image: "/meals/Foufou_Adjoukrou.jpg",
      name: "Foufou banane verte",
      gender: "Adjoukrou",
      description:
        "Le foufou banane verte est un repas chez tous les peuples lagunaires Akans mais nous vous présentons celui des Adjoukrou.",
      strIngredient1: "Sel",
      strIngredient2: "Piments",
      strIngredient3: "Tomate",
      strIngredient4: "Huile rouge",
      strIngredient5: "Oignon jaune",
      strIngredient6: "Bananes vertes",
      strIngredient7: "Maggi",
      strIngredient8: "Poisson frais ou fumée",
      strMeasure3: "430 g",
      strMeasure4: "400 g",
      strMeasure5: "1.5 pièce d'oignon",
      strMeasure7: "1",
      strMeasure8: "5",
      duration: "2 heures",
    },
    {
      id: 6,
      image: "/meals/Akpessi-Nzo-scaled.jpg",
      name: "Akpessi N'zo",
      gender: "Agni",
      description: "C'est repas de spécialité chez les agni d'Aboisso...",
      strIngredient1: "Sel",
      strIngredient2: "Piments",
      strIngredient3: "Tomate fraîche",
      strIngredient4: "Huile",
      strIngredient5: "Oignon",
      strIngredient6: "Demi-igname",
      strIngredient7: "Maggi",
      strIngredient8: "Poisson frais ou fumée",
      strIngredient9: "Petit morceau d'adjovant",
      strIngredient10: "Aubergine africaine",
      strIngredient11: "Une gousse d'ail",
      strIngredient12: "Une cuillière à café de tomate",
      duration: "2 heures",
    },
    {
      id: 7,
      image: "/meals/Ahizi.jpg",
      name: "Foufou banane plantain accompagné de sauce Kokotcha",
      gender: "Ahizi",
      description:
        "Nous vous présentons le foufou Ahizi un repas de famille chez tous les Akans lagunaire",
      strIngredient1: "Sel",
      strIngredient2: "Piments frais",
      strIngredient3: "Tomates fraiches",
      strIngredient4: "Huile rouge",
      strIngredient5: "Oignons",
      strIngredient6: "Bananes plantain",
      strIngredient7: "Maggi",
      strIngredient8: "Poissons fumées",
      strIngredient9: "Queue de boeuf ou côtelettes",
      strIngredient10: "Aubergines",
      strIngredient11: "Akpi",
      strIngredient12: "Piments secs",
      strIngredient13: "Gombos frais",
      strIngredient14: "botte de kablé",
      strMeasure2: "5",
      strMeasure3: "3",
      strMeasure4: "150 ml",
      strMeasure5: "2",
      strMeasure6: "8",
      strMeasure7: "2",
      strMeasure8: "4",
      strMeasure9: "3 feuilles",
      strMeasure10: "5",
      strMeasure11: "10",
      strMeasure12: "10",
      strMeasure13: "4",
      strMeasure14: "1",
      duration: "3 heures",
    },
    {
      id: 8,
      image: "/meals/Alladjan.jpg",
      name: "Kéwé N'gbo (Alladian)",
      gender: "Alladian",
      description:
        "C'est une spécialité chez le peuple Alladian, un repas partager en famille...",
    },
    {
      id: 9,
      image: "/meals/images.jpg",
      name: "Sauce Bieukosseu",
      gender: "Attié",
      description:
        "La sauce bieukosseu est une cuisine du peuple attié c'est un repas de famille que l'on peut manger avec du foutou et du riz.",
      strIngredient1: "Sel",
      strIngredient2: "Piments",
      strIngredient3: "Tomates fraiches",
      strIngredient4: "Huile",
      strIngredient5: "Oignons",
      strIngredient6: "Tomate pâte",
      strIngredient7: "Maggi",
      strIngredient8: "Poissons frais",
      strIngredient10: "Aubergines africaines",
      strIngredient11: "Akpi",
      strIngredient12: "feuille de banane",
      strMeasure2: "2",
      strMeasure3: "4",
      strMeasure4: "150 ml",
      strMeasure5: "2",
      strMeasure6: "1",
      strMeasure7: "4",
      strMeasure8: "4",
      strMeasure9: "3 feuilles",
      strMeasure10: "6",
      strMeasure11: "10",
      strMeasure12: "10",
      duration: "3 heures",
    },
    {
      id: 10,
      image: "/meals/Kéwé_N'gbo_Avikam.jpg",
      name: "Kéwé N'gbo (Avikam)",
      gender: "Avikam",
      description: "Un repas souvent pris comme petit déjeuner...",
    },
    {
      id: 11,
      image: "/meals/Sauce gouagouassou au poisson fumé.jpg",
      name: "Sauce Gouagouassou avec Poisson fumé",
      gender: "Baoulé",
      description:
        "La sauce gouagouassou est une spécialité chez le peuple baoulé.",
      strIngredient1: "Sel",
      strIngredient2: "Piments",
      strIngredient3: "Tomates fraiches",
      strIngredient4: "Huile rouge",
      strIngredient5: "Oignons frais",
      strIngredient6: "Eau",
      strIngredient7: "Maggi",
      strIngredient8: "Daurades (Poissons frais)",
      strIngredient10: "Gombos",
      strIngredient11: "Akpi",
      strIngredient12: "Adjovant",
      strIngredient13: "Poudre de poisson sec",
      strIngredient14: "Poudre de crevette",
      strMeasure2: "6",
      strMeasure3: "2",
      strMeasure4: "150 ml",
      strMeasure5: "2",
      strMeasure7: "2",
      strMeasure8: "2",
      strMeasure10: "10",
      duration: "3 heures",
    },
    {
      id: 12,
      image: "/meals/Ebrié.jpg",
      name: "Soupe de pêcheur",
      gender: "Ebrié",
      description:
        "La soupe de pêcheur est une spécialité des Ebrié un repas qu'il partage en famille...",
      strIngredient1: "Sel",
      strIngredient2: "Piments",
      strIngredient3: "Tomates fraiches",
      strIngredient4: "Huile rouge",
      strIngredient5: "Oignons frais",
      strIngredient6: "Eau",
      strIngredient7: "Maggi",
      strIngredient8: "Daurades (Poissons frais)",
      strIngredient10: "Gombo",
      strIngredient11: "Akpi",
      strIngredient12: "Adjovant",
      strIngredient13: "Poudre de poisson sec",
      strIngredient14: "Poudre de crevette",
      strMeasure2: "6",
      strMeasure3: "2",
      strMeasure4: "150 ml",
      strMeasure5: "2",
      strMeasure7: "2",
      strMeasure8: "2",
      strMeasure10: "10",
      duration: "3 heures",
    },
  ];

  const [recipeDetails, setRecipeDetails] = useState({});

  // Fonction de lien de navigation sur les détails de recette
  const recipeId = useParams().id;

  const fetchRecipeDetails = async () => {
    try {
      const response = await axios.get(`https://api.freeapi.app/api/v1/public/meals/${recipeId}`);
      setRecipeDetails(response.data.data);
    } catch (error) {
      
    }
  }


  useEffect(() => {
    fetchRecipeDetails()
  }, [])

  return (
    <section id="details" className="skill">
      <div className="col detail-image">
        <img src={recipeDetails.strMealThumb} alt="" />
      </div>
      <div className="col detail-recipe">
        <h1>{recipeDetails.strMeal}</h1>
        <p>
          Repas: <b>{recipeDetails.strCategory}</b>
        </p>
      </div>
      <div className="ingredients">
        <h4 className="h4">Ingredients</h4>
        <p>
          {recipeDetails.strIngredient1} <b>{recipeDetails.strMeasure1}</b>
        </p>
        <p>
          {recipeDetails.strIngredient2} <b>{recipeDetails.strMeasure2}</b>
        </p>
        <p>
          {recipeDetails.strIngredient3} <b>{recipeDetails.strMeasure3}</b>
        </p>
        <p>
          {recipeDetails.strIngredient4} <b>{recipeDetails.strMeasure4}</b>
        </p>
        <p>
          {recipeDetails.strIngredient5} <b>{recipeDetails.strMeasure5}</b>
        </p>
        <p>
          {recipeDetails.strIngredient6} <b>{recipeDetails.strMeasure6}</b>
        </p>
        <p>
          {recipeDetails.strIngredient7} <b>{recipeDetails.strMeasure7}</b>
        </p>
        <p>
          {recipeDetails.strIngredient8} <b>{recipeDetails.strMeasure8}</b>
        </p>
        <p>
          {recipeDetails.strIngredient9} <b>{recipeDetails.strMeasure9}</b>
        </p>
        <p>
          {recipeDetails.strIngredient10} <b>{recipeDetails.strMeasure10}</b>
        </p>
        <p>
          {recipeDetails.strIngredient11} <b>{recipeDetails.strMeasure11}</b>
        </p>
        <p>
          {recipeDetails.strIngredient12} <b>{recipeDetails.strMeasure12}</b>
        </p>
        <p>
          {recipeDetails.strIngredient13} <b>{recipeDetails.strMeasure13}</b>
        </p>
        <p>
          {recipeDetails.strIngredient14} <b>{recipeDetails.strMeasure14}</b>
        </p>
        <p className="timing">
          Durée du repas: <b>{recipeDetails.duration}</b>
        </p>
      </div>
    </section>
  );
};

export default Detail;
