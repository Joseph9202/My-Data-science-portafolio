// src/pages/DataScienceProjects.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function DataScienceProjects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [loading, setLoading] = useState(true);

  // Esta función simula la carga de datos desde tus archivos de data science
  // En una implementación real, podrías usar una API o leer directamente de archivos
  useEffect(() => {
    // Simulamos un tiempo de carga para mostrar el estado de carga
    setTimeout(() => {
      // Aquí definimos los proyectos de data science
      const dataScienceProjects = [
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
        }
      ];
      
      setProjects(dataScienceProjects);
      setFilteredProjects(dataScienceProjects);
      setLoading(false);
    }, 800); // Simulación de tiempo de carga
  }, []);

  // Obtener todas las categorías únicas para el filtro
  const categories = ['Todos', ...new Set(projects.map(project => project.categoria))];

  // Manejar búsqueda y filtrado
  useEffect(() => {
    let result = projects;
    
    // Filtrar por término de búsqueda
    if (searchTerm) {
      result = result.filter(project => 
        project.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
        project.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tecnologias.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Filtrar por categoría
    if (selectedCategory !== 'Todos') {
      result = result.filter(project => project.categoria === selectedCategory);
    }
    
    setFilteredProjects(result);
  }, [searchTerm, selectedCategory, projects]);

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-lg-8">
          <h1 className="display-4 mb-3">Proyectos de Data Science</h1>
          <p className="lead text-muted">
            Explora mi portafolio de proyectos relacionados con análisis de datos, 
            machine learning, NLP y visualización de datos.
          </p>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar proyectos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              className="btn btn-outline-secondary" 
              type="button"
              onClick={() => setSearchTerm('')}
            >
              Limpiar
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Estado de carga */}
      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2">Cargando proyectos...</p>
        </div>
      ) : (
        <>
          {/* Resultados de búsqueda */}
          <div className="mb-4">
            <p>
              Mostrando {filteredProjects.length} de {projects.length} proyectos
              {searchTerm && ` para la búsqueda "${searchTerm}"`}
              {selectedCategory !== 'Todos' && ` en la categoría "${selectedCategory}"`}
            </p>
          </div>

          {/* Tarjetas de proyectos */}
          <div className="row">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div className="col-lg-6 mb-4" key={project.id}>
                  <div className="card h-100 shadow-sm hover-shadow">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h3 className="card-title h5">{project.titulo}</h3>
                        <span className="badge bg-primary">{project.categoria}</span>
                      </div>
                      <p className="card-text">{project.descripcion}</p>
                      <div className="mb-3">
                        {project.tecnologias.map((tech, index) => (
                          <span key={index} className="badge bg-secondary me-1 mb-1">{tech}</span>
                        ))}
                      </div>
                      <p className="text-muted small">
                        <i className="bi bi-calendar"></i> {new Date(project.fecha).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="card-footer bg-white border-top-0">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary"
                      >
                        Ver Proyecto <i className="bi bi-arrow-right ms-1"></i>
                      </a>
                      <Link 
                        to={`/proyecto/${project.id}`} 
                        className="btn btn-outline-secondary ms-2"
                      >
                        Detalles
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center my-5">
                <div className="alert alert-info">
                  <i className="bi bi-info-circle me-2"></i>
                  No se encontraron proyectos que coincidan con tu búsqueda.
                </div>
                <button 
                  className="btn btn-outline-primary mt-3"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('Todos');
                  }}
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default DataScienceProjects;
