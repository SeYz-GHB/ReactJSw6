// src/User.jsx
import React from 'react';
import './User.css'; // We'll update this for styling

const User = ({ firstName, lastName, title }) => {
  return (
    <div className="user-button">
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>{title}</p>
    </div>
  );
};

export default User;