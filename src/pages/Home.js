// src/pages/Home.js
import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        ¡Bienvenido a mi Portafolio!
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Soy [Tu Nombre], especialista en Data Science.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/proyectos">
        Ver Proyectos
      </Button>
    </Container>
  );
}

export default Home;
