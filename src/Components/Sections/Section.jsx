import React, { useEffect, useState } from "react";
import "./section.css";
import { TypeAnimation } from "react-type-animation";
import Image from "../CustomImage/Image";
import { useNavigate } from "react-router";
import axios from "axios";

const Section = () => {
  // Listes des recettes
  const [images, setImages] = useState([]);
  // Etat pour gérer les erreurs
  const [err, setErr] = useState(null);
  // Etat pour gérer le chargement
  const [load, setLoad] = useState(true);

  // Fonction de récupération des images de recettes
  const fetchImageRecipes = async () => {
    try {
      const res = await axios.get(
        "https://api.freeapi.app/api/v1/public/meals?page=1&limit=9"
      );
      setImages(res.data.data.data); // Met les images à jour
    } catch (error) {
      setErr("Erreur de récupération de l'image", error);
    } finally {
      setLoad(false);
    }
  };

  // Récupération des données images
  useEffect(() => {
    fetchImageRecipes(); // Initialise les images
  }, []);

  // Navigation de la page recettes
  const navigateSection = useNavigate();

  const handleClick = () => {
    navigateSection("/Recipes/Recipe");
  };

  return (
    <section id="section" className="hero">
      <div className="col typography">
        <h1 className="h1">
          <span className="spa1">Bienvenue</span> sur le site de recettes AKAN
          nous vous proposons des <br />
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              "Plats de festivités",
              2000,
              "Repas fait en famille",
              2000,
              "Spécialités de chez nous",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            cursor={false}
            className="TA"
          />
        </h1>
        <p className="info">
          Découvre nos bon repas, notre cuisine est la meilleure sur le
          territoire ivoirien, nous sommes réputés pour le bieukosseu, kédjénou,
          foufou et plein d'autres plats vous attendent.
        </p>
        <button onClick={handleClick} className="btn btn-primary">
          Explorez maintenant
        </button>
      </div>
      <div className="col gallery">
        {load && <p>Patientez un instant...</p>}
        {err && <p>{err}</p>}
        {images.map((image, index) => (
          <Image key={index} imgSrc={image} pt="70%" />
        ))}
      </div>
    </section>
  );
};

export default Section;
