// src/components/User.jsx
import './User.css';

export default function User() {
  const userData = {
    firstName: "Ronan",
    lastName: "Ogor",
    title: "PN React JS Killer",
  };

  return (
    <div className="user-container">
      <h2>{userData.firstName} {userData.lastName}</h2>
      <p>{userData.title}</p>
    </div>
  );
}