import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function NewFilms() {
const { movies, setMovie } = useOutletContext()
const [newFilm, setNewFilm] = useState({
  name: '',
  image: '',
  rating: ''
});

function handleChange(e) {
  const newValue = e.target.value;
  const inputName = e.target.name;
  const updatedFilm = {...newFilm}
  updatedFilm[inputName] = newValue;
  setNewFilm(updatedFilm);
}

function submitForm(e) {
  e.preventDefault();
  fetch("http://localhost:3000/movies", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFilm)
  })
  .then(r => r.json())
  .then(movie => setMovie([...movies, movie]));// at this point we added the essential function but we need to send the data to the state
  setNewFilm({}) // here we send the data to the state  
};

return (
 <Typography>
  <div className="new-film-form">
    <h2>Your New Media Entry</h2>
      <form onSubmit={submitForm}> 
        <input type="text" name="name" placeholder="Enter Your Movie Here" 
            value={newFilm.name} onChange={handleChange}/>

        <input type="text" name="image" placeholder="Your Movie Image " 
            value={newFilm.image} onChange={handleChange}/>

        <input type="text" name="rating" placeholder="Enter your Rating Number" 
            value={newFilm.rating} onChange={handleChange}/>

        <button type="submit">Add Media</button>
      </form>
  </div>
</Typography>
    );
  }
  
  export default NewFilms;

  // I need to import an emoji that adds stars to a page or 
  // I want to go and put a function here to increment the amount of stars
  // that are shown on the page 