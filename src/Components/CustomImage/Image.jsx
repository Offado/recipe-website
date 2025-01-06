import React from "react";
import "./image.css";

const Image = ({imgSrc, pt}) => {
  return (
    <div className="custom-image" style={{paddingTop: pt}}>
      <img src={imgSrc.strMealThumb} alt="" />
    </div>
  );
};

export default Image;
