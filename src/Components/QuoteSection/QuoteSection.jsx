import React from "react";
import "./quoteSection.css";
import { FaQuoteLeft } from "react-icons/fa6";

const QuoteSection = () => {
  return (
    <div className="section quote">
      <p className="quote-text">
        <FaQuoteLeft className="icon-quote" size={20} />
        La cuisine, c'est un peu comme le cinéma. C'est l'émotion qui compte.
      </p>
      <p className="quote-author">- Anne-Sophie Pic</p>
      <p className="quote-text">
        <FaQuoteLeft className="icon-quote" size={20} />
        On apprend la cuisine avec celle des autres... à un moment donné on fait
        la sienne.
      </p>
      <p className="quote-author">- Jean-François Piège</p>
      <p className="quote-text">
        <FaQuoteLeft className="icon-quote" size={20} />
        Le principal ingrédient pour toute une bonne cuisine familiale est
        l'amour, l'amour envers ceux pour qui vous cuisiner.
      </p>
      <p className="quote-author">- Sophia Loren</p>
    </div>
  );
};

export default QuoteSection;
