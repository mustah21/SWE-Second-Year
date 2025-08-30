import React from 'react';
import './idcard.css';

const IdCard = (props) => {
  return (
    <div className="idcard">
      <img src={props.picture} alt={`${props.name} ${props.lastname}`} />
      <div className="info">
        <p><strong>First name:</strong> {props.name}</p>
        <p><strong>Last name:</strong> {props.lastname}</p>
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Height:</strong> {props.height}m</p>
        <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
