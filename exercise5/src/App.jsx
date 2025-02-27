// src/App.jsx
import React from 'react';
import Card from './components/Card';
import './App.css';

const items = [
  { name: 'Ding, Class C', interests: 'Soccer, Tennis', image: 'https://picsum.photos/200/200?random=1' },
  { name: 'Dong, Class A', interests: 'Piano', image: 'https://picsum.photos/200/200?random=2' },
  { name: 'Dang, Class C', interests: 'Video Games', image: 'https://picsum.photos/200/200?random=3' },
  { name: 'Dung, Class B', interests: 'I like all', image: 'https://picsum.photos/200/200?random=4' },
];

function App() {
  return (
    <div className="App">

      <div className="card-container">
        {items.map((item, index) => (
          <Card key={index} name={item.name} interests={item.interests} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default App;