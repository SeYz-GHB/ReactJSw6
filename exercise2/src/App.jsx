// src/App.jsx
import React from 'react';
import User from './User';
import './App.css'; // We'll create this for app-level styling

function App() {
  const users = [
    { firstName: 'Vinh', lastName: 'Hoang Nhu', title: 'PN Training Manager' },
    { firstName: 'My', lastName: 'Ngo', title: 'PN Trainer' },
  ];

  return (
    <div className="app-container">
      <h1>PNV REACT TEAM !!</h1>
      <p>Here are some PNV React masters, do you know them?</p>
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