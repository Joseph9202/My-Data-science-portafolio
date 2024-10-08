// src/pages/SobreMi.js
import React from 'react';

function SobreMi() {
  return (
    <div className="container mt-5">
      <h1>Sobre Mí</h1>
      <div className="row">
        <div className="col-md-4">
          <img src="ruta-a-tu-foto.jpg" alt="Tu Nombre" className="img-fluid rounded-circle" />
        </div>
        <div className="col-md-8">
          <p>
            ¡Hola! Soy [Tu Nombre], un apasionado de la ciencia de datos con experiencia en análisis, modelado y visualización de datos. Me especializo en...
          </p>
          <p>
            [Añade más información sobre tu formación, habilidades y experiencia.]
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
