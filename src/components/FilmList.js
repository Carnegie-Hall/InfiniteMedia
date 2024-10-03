import React from "react";
import FilmCard from "./FilmCard";

function FilmList ({movies}) {
    return (
        <ul>
            {movies.map(movie => <FilmCard key={movie.id} movie={movie} />)}
        </ul>
    )
}
export default FilmList;
