// src/Place.jsx
import React from "react";

const Place = ({ id, title, image, alt }) => {
  return (
    <li key={id} className="place-item">
      <button>
        <img src={image} alt={alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
};

export default Place;