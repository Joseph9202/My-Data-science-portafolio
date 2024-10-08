// src/components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mi Portafolio
        </Typography>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/proyectos">Proyectos</Button>
        <Button color="inherit" component={Link} to="/sobre-mi">Sobre Mí</Button>
        <Button color="inherit" component={Link} to="/contacto">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

