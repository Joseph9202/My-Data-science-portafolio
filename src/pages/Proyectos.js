// src/pages/Proyectos.js
import React from 'react';

function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: 'Análisis de Datos de Ventas',
      descripcion: 'Proyecto de análisis de datos de ventas para identificar tendencias y patrones de comportamiento del consumidor utilizando Python y pandas.',
      categoria: 'Análisis de Datos',
      tecnologias: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      imagen: '/images/data-analysis.jpg',
      link: 'https://github.com/tuusuario/proyecto-ventas',
      fecha: '2023-12-15'
    },
    {
      id: 2,
      titulo: 'Modelo de Predicción de Precios',
      descripcion: 'Modelo de machine learning para predecir precios de viviendas basado en características como ubicación, tamaño y antigüedad.',
      categoria: 'Machine Learning',
      tecnologias: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas'],
      imagen: '/images/housing-prediction.jpg',
      link: 'https://github.com/tuusuario/proyecto-prediccion',
      fecha: '2024-01-22'
    },
    {
      id: 3,
      titulo: 'Análisis de Sentimientos en Twitter',
      descripcion: 'Proyecto de procesamiento de lenguaje natural para analizar sentimientos en tweets relacionados con productos tecnológicos.',
      categoria: 'NLP',
      tecnologias: ['Python', 'NLTK', 'Transformers', 'SpaCy'],
      imagen: '/images/nlp-sentiment.jpg',
      link: 'https://github.com/tuusuario/sentiment-analysis',
      fecha: '2024-02-10'
    },
    {
      id: 4,
      titulo: 'Dashboard de Métricas de Negocio',
      descripcion: 'Dashboard interactivo para visualización de KPIs y métricas de rendimiento de negocio en tiempo real.',
      categoria: 'Visualización',
      tecnologias: ['Python', 'Plotly', 'Dash', 'SQL'],
      imagen: '/images/dashboard.jpg',
      link: 'https://github.com/tuusuario/business-dashboard',
      fecha: '2024-03-05'
    },
    {
      id: 5,
      titulo: 'Segmentación de Clientes',
      descripcion: 'Algoritmo de clustering para identificar segmentos de clientes basados en patrones de compra y comportamiento.',
      categoria: 'Machine Learning',
      tecnologias: ['Python', 'Scikit-learn', 'K-means', 'PCA'],
      imagen: '/images/customer-segments.jpg',
      link: 'https://github.com/tuusuario/customer-segmentation',
      fecha: '2024-04-18'
    },
    {
      id: 5¿y,
      titulo: 'Youtube API',
      descripcion: 'Algoritmo de clustering para identificar segmentos de clientes basados en patrones de compra y comportamiento.',
      categoria: 'Análisis y visualización de datos',
      tecnologias: ['Python', 'api', 'dashboard', 'rawdata'],
      imagen: '/images/customer-segments.jpg',
      link: 'https://github.com/tuusuario/customer-segmentation',
      fecha: '2024-04-18'
    },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Mis Proyectos</h1>
      <div className="row">
        {proyectos.map((proyecto, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{proyecto.titulo}</h5>
                <p className="card-text">{proyecto.descripcion}</p>
              </div>
              <div className="card-footer">
                <a href={proyecto.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Ver Proyecto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;