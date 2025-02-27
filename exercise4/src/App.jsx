// src/App.jsx
import React from "react";
import Place from "./Place";
import { places } from "./data";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>PlacePicker</h1>
      <p>Where would you like to go?</p>
      <ul className="places-list">
        {places.map((place) => (
          <Place
            key={place.id}
            id={place.id}
            title={place.title}
            image={place.image}
            alt={place.alt}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;