import React from "react";

const ChiefCard = ({chief}) => {
  return (
    <div className="chief-card">
      <div className="chief-card-image">
        <img src={chief.img} alt="" />
      </div>
      <div className="chief-card-info">
        <h3 className="chief-card-name">{chief.name}</h3>
        <p className="chief-card-count">Recettes: <b>{chief.recipesCount}</b></p>
        <p className="chief-card-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
      </div>
    </div>
  );
};

export default ChiefCard;
