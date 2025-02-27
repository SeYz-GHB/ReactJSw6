// src/App.jsx
import React from 'react';
import User from './User';
import './App.css'; // We'll keep this as is

function App() {
  const users = [
    { firstName: 'Ronan', lastName: 'Ogor', title: 'PN React JS Killer' },
  ];

  return (
    <div className="app-container">
      <h1>WELCOME !!</h1>
      <p>PNV students are you ready to React Course ? You got this 😊</p>
      {users.map((user, index) => (
        <User
          key={index}
          firstName={user.firstName}
          lastName={user.lastName}
          title={user.title}
        />
      ))}
    </div>
  );
}

export default App;