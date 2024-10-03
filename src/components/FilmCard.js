import React from "react";

function FilmCard ({movie}) {
  return (
    <li>
      <img src={movie.image} alt={movie.name}/>
      <h2>Movie Name: {movie.name} </h2>
      <h4>Review: {movie.review} </h4> 
      <h4>Rating: {movie.rating} </h4>
    </li>
  );
} 

export default FilmCard; 

//h4 needs an area to put in review destructuring?
// second h4 has a increment function to make star rating go up or down 