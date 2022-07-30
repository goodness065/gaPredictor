import React from "react";
import "./styles/card.css";
import card_logo from "../../asset/images/logo.png";

const Cards = ({className, text}) => {
  return (
    <div className={`cards ${className}`}>
      <img className="card-logo" src={card_logo}  alt="logo"/>
      <div className="stakes_price">
        <b className="card-main-text">
          {text}
        </b>
        <br />
        <small className="matches_count">Active || matches</small>
      </div>
      
    </div>
  );
};

export default Cards;
