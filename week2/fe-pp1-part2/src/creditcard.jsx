import React from 'react';
import "./creditcard.css";
import visa from './visa.png';
import masterCard from './master.png';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    color,
    bgColor,

  } = props;


  const lastDigits = number.slice(-4);

  // decide logo
  const cardLogo = type.toUpperCase() === "VISA" ? visa : masterCard;

  return (
    <div className = "card-container">
    <div className="creditcard"
      style={{ backgroundColor: bgColor, color: color }}>

      <div className="card-top">
        <img src={cardLogo} alt={type} className="card-logo" />
      </div>


      <div className="card-number">
        •••• •••• •••• {lastDigits}
      </div>

      <div className="last-row">
          <span>Expires {expirationMonth}/{expirationYear}</span>
          <span className="bank">{bank}</span></div>
    
      <div className="card-owner">{owner}</div>


    </div>
    </div>
  );
};

export default CreditCard;