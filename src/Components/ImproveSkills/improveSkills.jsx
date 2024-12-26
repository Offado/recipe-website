import React from "react";
import "./improveskills.css";

const ImproveSkills = () => {
  // Listes des compétences culinaires
  const list = [
    "Apprenez de nouvelles recettes",
    "Expérimentez avec la nourriture",
    "Écrivez vos propres recettes",
    "Connaissez les valeurs nutritionnelles",
    "Obtenez des conseils de cuisine",
    "Soyez classé"
  ]

  return (
    <section id="improve" className="skill">
      <div className="col img">
        <img src="../assets/spécialité.jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="h2">Améliorer vos compétences culinaires</h1>
        { list.map((item, index) => (
          <p className="skills" key={index}>{item}</p>
        ))}
        <button className="btn btn-primary">Inscrivez-vous maintenant</button>
      </div>
    </section>
  );
};

export default ImproveSkills;
