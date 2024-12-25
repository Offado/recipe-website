import React from "react";
import "./header.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="container-header">
      <h1>Restaurant AKAN</h1>
      <ul>
        <li>
          <Link to="/" className="link1">
            <span>Accueil</span>
          </Link>
        </li>
        <li>
          <Link to="/Recipes/Recipe" className="link2">
            <span>Recettes</span>
          </Link>
        </li>
        <li>
          <Link to="/Categories/Categories" className="link3">
            <span>Catégories</span>
          </Link>
        </li>
        <div className="menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </ul>
    </div>
  );
};

export default Header;
