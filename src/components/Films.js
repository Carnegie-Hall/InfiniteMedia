import React from "react";
import FilmList from "./FilmList";
import { useOutletContext } from "react-router-dom";
// import Search from "./Search";
// import NewFilms from "./NewFilms";

function Films () {
  const {movies} = useOutletContext();
  return (
    <> 
    
      {/* <Reviews/> */}
      {/* <Search/> */}
      <FilmList movies={movies}/> 
    </>
  );
}

export default Films;

 /* For some reason when we had space in our fragment we kept getting errors that 
 the filmlist component was not defined, was it unreachable?*/