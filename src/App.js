import React, { useState, useEffect } from 'react';
import Films from './components/Films';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({cssVariables: true});

function App() {

  const [ movies, setMovie ] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3000/movies")
      .then(resp => resp.json())
      .then(data => setMovie(data))
  }, [])

  return (
   <Container sx={{bgcolor: 'tomato', height: '100vh'}}>
    <div>
      <header>
        <NavBar />
      </header>
      <Header/>
      {/* <Films movies={movies}/> */}
      <Outlet context={{movies, setMovie}}/>
    </div>
    </Container>
  )
}

export default App;
