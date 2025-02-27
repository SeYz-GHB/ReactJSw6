// src/components/Card.jsx
import React from 'react';
import './Card.css';

function Card({ name, interests, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{interests}</p>
    </div>
  );
}

export default Card;