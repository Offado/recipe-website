import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router";
import Menu from "../SideBar/Menu";
import { FaHome } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";


const Header = () => {
  // Etat booléen de sidebar-icon
  const [show, setShow] = useState(false);

  // les liens du Sidebar
  const links = [
    {
      name: "Accueil",
      path: "/",
      icon: <FaHome />
    },
    {
      name: "Recettes",
      path: "/Recipes/Recipe",
      icon: <FaList />
    },
    {
      name: "Catégories",
      path: "/Categorie/Categories",
      icon: <BiSolidCategory />
    },
  ];

  // Fonction pour fermer le menu sideBar
  function closeSetShow() {
    setShow(!show)
  }

  return (
    <>
      <div className="container-header">
        <h1>Recettes AKAN</h1>
        <div className="header">
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
          </ul>
        </div>
        <div
          onClick={() => setShow(true)}
          className={show ? "menu active" : "menu"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {show && <Menu close={closeSetShow} links={links} />}
      </div>
    </>
  );
};

export default Header;
