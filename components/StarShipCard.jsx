import React from 'react';


const StarshipCard = ({ starships }) => {
    return (

        <div className="container">
        {starships.map((starship, index) =>(
            <div key = {index} className="key">   
            <h3>{starship.name}</h3>
            </div>
        ))}
        </div>
        
  );
}; 

export default StarshipCard;