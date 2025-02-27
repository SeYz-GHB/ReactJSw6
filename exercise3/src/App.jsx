// src/App.jsx
import React from 'react';
import User from './User';
import { ALL_PNV_TEACHERS } from './teachers';
import './App.css'; // Keep the existing styling

function App() {
  return (
    <div className="app-container">
      <h1>PNV TEAM !!</h1>
      <p>Here are some PNV trainers and educators, do you know them?</p>
      {ALL_PNV_TEACHERS.map((teacher, index) => (
        <User
          key={index}
          firstName={teacher.firstName}
          lastName={teacher.lastName}
          title={teacher.title}
        />
      ))}
    </div>
  );
}

export default App;