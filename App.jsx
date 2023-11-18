import React, { useState, useEffect } from 'react';
import "./style.css"
import "./App.css"
import StarshipCard from './components/StarShipCard';
const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/starships/');
        const data = await response.json();
        setStarships(data.results);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <div>
      <header className="header">
          <h2>Star Wars Starships</h2>
     </header>
      <div>
        <StarshipCard starships={starships}/>
      </div>
    
  </div>
    
  );
};

export default App;