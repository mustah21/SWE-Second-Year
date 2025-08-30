import React from 'react';
import "./idcard.css"

const Random = ({ min, max }) => {
  // Generate a random integer between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className = "App">
      <p>Random value between {min} and {max}: <strong>{randomNumber}</strong></p>
    </div>
  );
};

export default Random;
