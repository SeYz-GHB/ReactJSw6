// src/User.jsx
import React from 'react';
import './User.css';

const User = ({ firstName, lastName, title }) => {
  return (
    <div className="user-button">
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>{title}</p>
    </div>
  );
};

export default User;