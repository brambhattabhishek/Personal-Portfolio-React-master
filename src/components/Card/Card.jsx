import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <a href ="https://sumatosoft.com/blog/ui-ux-developer-designer-difference"><img src={emoji} alt="" /></a>
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">Click on Emoji</button>
    </div>
  );
};

export default Card;
