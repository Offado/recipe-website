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

  // // Pagination des recettes
  // const [data, setData] = useState([]); // Données de l'API
  // const [currentPage, setCurrentPage] = useState(1); // Page actuelle
  // const [totalPages, setTotalPages] = useState(1); // Nombre de pages
  // const itemsPerPage = 12; // Nombre de recettes par page

  // // Fonction pour charger les données depuis l'API
  // const fetchDataPage = async (page) => {
  //   try {
  //     const result = await axios.get(
  //       `https://api.freeapi.app/api/v1/public/meals`,
  //       {
  //         params: {
  //           page: page,
  //           limit: itemsPerPage,
  //         },
  //       }
  //     );
  //     setData(result.data.data.data); // données renvoyées
  //     setTotalPages(result.data.data.totalPages); // renvoie le nombre total des pages
  //   } catch (error) {
  //     setErr("Erreur de récupération des pages", error);
  //   }
  // };

  // // Récupération des pages de recettes
  // useEffect(() => {
  //   fetchDataPage(currentPage);
  // }, [currentPage]);

  // // Fonction pour changer de pages
  // const handleChangePage = (page) => {
  //   if (page >= 1 && page <= totalPages) {
  //     setCurrentPage(page);
  //   }
  // };

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
        {loading && <p>Veuillez patienter pour les recettes...</p>}
        {err && <p>{err}</p>}
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
      {/* <div className="recipe-pagination">
        <ul>
          {data && data.map((items) => (
            <li key={items.idMeal}>{items.strMeal}</li>
          ))}
        </ul>
        <div className="pagination-button">
          <button
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            précédent
          </button>
        </div>
      </div> */}
      <div className="recipe-footer">
        <FooterPage />
      </div>
    </div>
  );
};

export default Recipe;
