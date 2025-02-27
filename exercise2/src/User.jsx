// src/User.jsx
import React from 'react';
import './User.css'; // We'll create this for styling

const User = ({ firstName, lastName, title }) => {
  return (
    <button className="user-button">
      {`${firstName} ${lastName}`}
      <br />
      {title}
    </button>
  );
};

export default User;