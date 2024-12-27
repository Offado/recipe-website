import React from "react";
import "./section.css";
import { TypeAnimation } from "react-type-animation";
import Image from "../CustomImage/Image";
import { useNavigate } from "react-router";


const Section = () => {
  // Listes des images
  const images = [
    "../assets/img1.jpg",
    "../assets/img2.jpg",
    "../assets/img3.jpg",
    "../assets/img4.jpg",
    "../assets/img5.jpg",
    "../assets/img6.jpg",
    "../assets/img7.jpg",
    "../assets/img8.jpg",
    "../assets/img9.jpg",
  ];

  const navigateSection = useNavigate();

  const handleClick = () => {
    navigateSection("/Recipes/Recipe")
  }

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
        <button onClick={handleClick} className="btn btn-primary">Explorez maintenant</button>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <Image key={index} imgSrc={src} pt={"85%"} />
        ))}
      </div>
    </section>
  );
};

export default Section;
