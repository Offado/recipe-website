import React from "react";
import "./recipe.css";
import Search from "../Search/Search";
import Header from "../Header/Header";
import FooterPage from "../Footer/Footer";

const Recipe = () => {
  return (
    <div>
      <div className="recipe-header">
        <Header />
      </div>
      <div className="recipe-search">
        <Search />
        <section id="recipe" className="section-recipe">
          <h4>Recherches précédentes</h4>
        </section>
      </div>
      <div className="recipe-footer">
        <FooterPage />
      </div>
    </div>
  );
};

export default Recipe;
