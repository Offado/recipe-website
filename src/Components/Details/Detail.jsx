import React from "react";
import "./detail.css";
import { useParams } from "react-router";


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
      ingrédient1: "Ail",
      ingrédient2: "Tomate(s)",
      ingrédient3: "Poulet",
      ingrédient4: "Laurier",
      ingrédient5: "Brins de percils",
      ingrédient6: "Oignon vert",
      ingrédient7: "Aubergine",
      ingrédient8: "Piments",
      ingrédient9: "Sel",
      ingrédient10: "Poivre",
      mesure1: "5 gousses",
      mesure2: "3",
      mesure3: "1",
      mesure4: "3 feuilles",
      mesure5: "5",
      mesure6: "1",
      mesure7: "1",
      mesure8: "10 (facultatif)",
      duration: "1 heure",
    },
    {
      id: 2,
      image: "/meals/KiyaAyra.jpg",
      name: "Sauce Kiya Ayra",
      gender: "Abidji",
      description: "La sauce Kiya Ayra est une cuisine du peuple Abidji.",
      ingrédient1: "Escargots (les gros de préférences)",
      ingrédient2: "Huile rouge",
      ingrédient3: "Piment vert (mankou flolo)",
      ingrédient4: "Oignon",
      ingrédient5: "Piments frais rouge",
      ingrédient6: "Câblé",
      ingrédient7: "Aubergine",
      ingrédient8: "Sel",
      ingrédient9: "maggi (optionnel)",
      duration: "1 heure 30 minutes",
    },
    {
      id: 3,
      image: "/meals/Placali_Abouré.jpg",
      name: "Placali Abouré",
      gender: "Abouré",
      description:
        "Le placali abouré est un repas spécial chez les abourés qui est un délice dans les restaurants d'abidjan.",
      ingrédient1: "Gombo frais",
      ingrédient2: "Piment",
      ingrédient3: "Tomate fraiche",
      ingrédient4: "Huile rouge",
      ingrédient5: "Viande de bœuf",
      ingrédient6: "Poisson fumé",
      ingrédient7: "Tripes",
      ingrédient8: "Crabe",
      ingrédient9: "Oignons",
      ingrédient10: "Feuille de kplala (lalo)",
      ingrédient11: "Cube maggi",
      ingrédient12: "Placali",
      ingrédient13: "Potasse",
      duration: "1 heure",
    },
    {
      id: 4,
      image: "/meals/Apésié.jpg",
      name: "Le Apésié",
      gender: "Abron",
      description:
        "C'est un repas de festivité chez les abron que vous pouvez faire chez vous à la maison. Au Ghana, ce plat est conseillé par les médecins pour les personnes qui souffrent de l'anémie.",
      ingrédient1: "Feuilles de tarots fraiches (N'godomiré en Abron)",
      ingrédient2: "Piment",
      ingrédient3: "Tomate fraiche",
      ingrédient4: "Huile rouge",
      ingrédient5: "Adjouvan ou poisson séché",
      ingrédient6: "Banane plantain",
      ingrédient7: "Avocats",
      ingrédient8: "Poisson frais",
      duration: "1 heure 30 minutes",
    },
    {
      id: 5,
      image: "/meals/Foufou_Adjoukrou.jpg",
      name: "Foufou banane verte",
      gender: "Adjoukrou",
      description:
        "Le foufou banane verte est un repas chez tous les peuples lagunaires Akans mais nous vous présentons celui des Adjoukrou.",
      ingrédient1: "Sel",
      ingrédient2: "Piments",
      ingrédient3: "Tomate",
      ingrédient4: "Huile rouge",
      ingrédient5: "Oignon jaune",
      ingrédient6: "Bananes vertes",
      ingrédient7: "Maggi",
      ingrédient8: "Poisson frais ou fumée",
      mesure3: "430 g",
      mesure4: "400 g",
      mesure5: "1.5 pièce d'oignon",
      mesure7: "1",
      mesure8: "5",
      duration: "2 heures",
    },
    {
      id: 6,
      image: "/meals/Akpessi-Nzo-scaled.jpg",
      name: "Akpessi N'zo",
      gender: "Agni",
      description: "C'est repas de spécialité chez les agni d'Aboisso...",
      ingrédient1: "Sel",
      ingrédient2: "Piments",
      ingrédient3: "Tomate fraîche",
      ingrédient4: "Huile",
      ingrédient5: "Oignon",
      ingrédient6: "Demi-igname",
      ingrédient7: "Maggi",
      ingrédient8: "Poisson frais ou fumée",
      ingrédient9: "Petit morceau d'adjovant",
      ingrédient10: "Aubergine africaine",
      ingrédient11: "Une gousse d'ail",
      ingrédient12: "Une cuillière à café de tomate",
      duration: "2 heures",
    },
    {
      id: 7,
      image: "/meals/Ahizi.jpg",
      name: "Foufou banane plantain accompagné de sauce Kokotcha",
      gender: "Ahizi",
      description:
        "Nous vous présentons le foufou Ahizi un repas de famille chez tous les Akans lagunaire",
      ingrédient1: "Sel",
      ingrédient2: "Piments frais",
      ingrédient3: "Tomates fraiches",
      ingrédient4: "Huile rouge",
      ingrédient5: "Oignons",
      ingrédient6: "Bananes plantain",
      ingrédient7: "Maggi",
      ingrédient8: "Poissons fumées",
      ingrédient9: "Queue de boeuf ou côtelettes",
      ingrédient10: "Aubergines",
      ingrédient11: "Akpi",
      ingrédient12: "Piments secs",
      ingrédient13: "Gombos frais",
      ingrédient14: "botte de kablé",
      mesure2: "5",
      mesure3: "3",
      mesure4: "150 ml",
      mesure5: "2",
      mesure6: "8",
      mesure7: "2",
      mesure8: "4",
      mesure9: "3 feuilles",
      mesure10: "5",
      mesure11: "10",
      mesure12: "10",
      mesure13: "4",
      mesure14: "1",
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
      ingrédient1: "Sel",
      ingrédient2: "Piments",
      ingrédient3: "Tomates fraiches",
      ingrédient4: "Huile",
      ingrédient5: "Oignons",
      ingrédient6: "Tomate pâte",
      ingrédient7: "Maggi",
      ingrédient8: "Poissons frais",
      ingrédient10: "Aubergines africaines",
      ingrédient11: "Akpi",
      ingrédient12: "feuille de banane",
      mesure2: "2",
      mesure3: "4",
      mesure4: "150 ml",
      mesure5: "2",
      mesure6: "1",
      mesure7: "4",
      mesure8: "4",
      mesure9: "3 feuilles",
      mesure10: "6",
      mesure11: "10",
      mesure12: "10",
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
      ingrédient1: "Sel",
      ingrédient2: "Piments",
      ingrédient3: "Tomates fraiches",
      ingrédient4: "Huile rouge",
      ingrédient5: "Oignons frais",
      ingrédient6: "Eau",
      ingrédient7: "Maggi",
      ingrédient8: "Daurades (Poissons frais)",
      ingrédient10: "Gombos",
      ingrédient11: "Akpi",
      ingrédient12: "Adjovant",
      ingrédient13: "Poudre de poisson sec",
      ingrédient14: "Poudre de crevette",
      mesure2: "6",
      mesure3: "2",
      mesure4: "150 ml",
      mesure5: "2",
      mesure7: "2",
      mesure8: "2",
      mesure10: "10",
      duration: "3 heures",
    },
    {
      id: 12,
      image: "/meals/Ebrié.jpg",
      name: "Soupe de pêcheur",
      gender: "Ebrié",
      description:
        "La soupe de pêcheur est une spécialité des Ebrié un repas qu'il partage en famille...",
      ingrédient1: "Sel",
      ingrédient2: "Piments",
      ingrédient3: "Tomates fraiches",
      ingrédient4: "Huile rouge",
      ingrédient5: "Oignons frais",
      ingrédient6: "Eau",
      ingrédient7: "Maggi",
      ingrédient8: "Daurades (Poissons frais)",
      ingrédient10: "Gombo",
      ingrédient11: "Akpi",
      ingrédient12: "Adjovant",
      ingrédient13: "Poudre de poisson sec",
      ingrédient14: "Poudre de crevette",
      mesure2: "6",
      mesure3: "2",
      mesure4: "150 ml",
      mesure5: "2",
      mesure7: "2",
      mesure8: "2",
      mesure10: "10",
      duration: "3 heures",
    },
  ];

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
        <p>
          {recipes.ingrédient1} <b>{recipes.mesure1}</b>
        </p>
        <p>
          {recipes.ingrédient2} <b>{recipes.mesure2}</b>
        </p>
        <p>
          {recipes.ingrédient3} <b>{recipes.mesure3}</b>
        </p>
        <p>
          {recipes.ingrédient4} <b>{recipes.mesure4}</b>
        </p>
        <p>
          {recipes.ingrédient5} <b>{recipes.mesure5}</b>
        </p>
        <p>
          {recipes.ingrédient6} <b>{recipes.mesure6}</b>
        </p>
        <p>
          {recipes.ingrédient7} <b>{recipes.mesure7}</b>
        </p>
        <p>
          {recipes.ingrédient8} <b>{recipes.mesure8}</b>
        </p>
        <p>
          {recipes.ingrédient9} <b>{recipes.mesure9}</b>
        </p>
        <p>
          {recipes.ingrédient10} <b>{recipes.mesure10}</b>
        </p>
        <p>
          {recipes.ingrédient11} <b>{recipes.mesure11}</b>
        </p>
        <p>
          {recipes.ingrédient12} <b>{recipes.mesure12}</b>
        </p>
        <p>
          {recipes.ingrédient13} <b>{recipes.mesure13}</b>
        </p>
        <p>
          {recipes.ingrédient14} <b>{recipes.mesure14}</b>
        </p>
        <p className="timing">
          Durée du repas: <b>{recipes.duration}</b>
        </p>
      </div>
    </section>
  );
};

export default Detail;
