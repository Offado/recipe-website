import React from "react";
import "./footer.css";


const FooterPage = () => {
  return (
    <div className="footer">
      <div className="section-footer">
      <h4>Recettes AKAN</h4>
        <p className="p">Retrouve nous tous les jours de 08h30-20h</p>
        <p className="p">&copy; 2024 | Tous les droits sont réservés</p>
      </div>
      <div className="section-footer">
      <h4>Coordonnées</h4>
        <p className="p">aoffolome@gmail.com</p>
        <p className="p">+225 07 87 60 67 08 / 05 00 38 91 14</p>
        <p className="p">78 BP 32 ABIDJAN 78, Abidjan</p>
      </div>
      <div className="section-footer">
      <h4>Réseaux sociaux</h4>
        <p className="p">Facebook</p>
        <p className="p">Instagram</p>
        <p className="p">Twitter</p>
        <p className="p">LinkedIn</p>
      </div>
    </div>
  );
};

export default FooterPage;
