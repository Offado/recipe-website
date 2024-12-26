import React from "react";
import "./topChef.css";
import ChiefCard from "./ChiefCard";

const TopChef = () => {
  // Liste des chefs
  const chiefs = [
    {
      name: "N'cho Yapi",
      img: "/Chiefs/image1.jpg",
      recipesCount: "10",
      cuisine: "Ivoirienne"
    },
    {
      name: "Gnamien Olivier",
      img: "/Chiefs/image3.jpg",
      recipesCount: "12",
      cuisine: "Ivoirienne"
    },
    {
      name: "Bance Zeinab",
      img: "/Chiefs/image4.jpg",
      recipesCount: "15",
      cuisine: "Ivoirienne"
    },
    {
      name: "Koffi kouadio",
      img: "/Chiefs/image2.jpg",
      recipesCount: "10",
      cuisine: "Ivoirienne"
    },
    {
      name: "Konan Valery",
      img: "/Chiefs/image5.jpg",
      recipesCount: "10",
      cuisine: "Ivoirienne"
    },
    {
      name: "Assa Monique",
      img: "/Chiefs/image.jpg",
      recipesCount: "12",
      cuisine: "Ivoirienne"
    }
  ]

  return (
    <div className="section chiefs">
      <h1 className="h3">Nos plus grands chefs</h1>
      <div className="chief-container">
        {chiefs.map((chief, index) => (
          <ChiefCard key={index} chief={chief} />
        ))}
      </div>
    </div>
  );
};

export default TopChef;
