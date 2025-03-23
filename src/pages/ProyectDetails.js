// src/pages/ProjectDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Componente para mostrar el detalle de un proyecto específico
function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // En una implementación real, aquí harías una llamada a una API o a tu sistema de archivos
    // para obtener los detalles del proyecto específico
    
    // Simulamos la carga de datos
    setTimeout(() => {
      // Base de datos simulada de proyectos
      const projects = [
        {
          id: 1,
          titulo: 'Análisis de Datos de Ventas',
          descripcion: 'Proyecto de análisis de datos de ventas para identificar tendencias y patrones de comportamiento del consumidor utilizando Python y pandas.',
          descripcionDetallada: `
            Este proyecto analiza datos de ventas mensuales durante un periodo de 3 años para identificar patrones estacionales, 
            preferencias de los consumidores y oportunidades de crecimiento.
            
            El análisis incluye:
            - Limpieza y preparación de datos con pandas
            - Análisis exploratorio de datos (EDA) con visualizaciones en Matplotlib y Seaborn
            - Segmentación de clientes basada en patrones de compra
            - Identificación de productos con mayor margen de ganancia
            - Recomendaciones estratégicas basadas en los hallazgos
          `,
          categoria: 'Análisis de Datos',
          tecnologias: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
          imagen: '/images/data-analysis.jpg',
          link: 'https://github.com/tuusuario/proyecto-ventas',
          fecha: '2023-12-15',
          resultados: [
            'Identificación de productos con mejor desempeño por temporada',
            'Segmentación efectiva de clientes por valor y frecuencia de compra',
            'Optimización del inventario basado en patrones de demanda',
            'Incremento del 15% en ventas mediante recomendaciones implementadas'
          ]
        },
        {
          id: 2,
          titulo: 'Modelo de Predicción de Precios',
          descripcion: 'Modelo de machine learning para predecir precios de viviendas basado en características como ubicación, tamaño y antigüedad.',
          descripcionDetallada: `
            Este proyecto desarrolla un modelo de regresión para predecir los precios de viviendas en diferentes zonas urbanas.
            Utiliza datos históricos de ventas de propiedades junto con características como tamaño, número de habitaciones,
            baños, ubicación geográfica, año de construcción, y amenidades cercanas.
            
            El proceso incluye:
            - Preprocesamiento y feature engineering
            - Análisis exploratorio para entender la correlación entre variables
            - Implementación de diferentes algoritmos (Regresión Lineal, Random Forest, XGBoost)
            - Validación cruzada y evaluación del modelo
            - Optimización de hiperparámetros para mejorar la precisión
          `,
          categoria: 'Machine Learning',
          tecnologias: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas'],
          imagen: '/images/housing-prediction.jpg',
          link: 'https://github.com/tuusuario/proyecto-prediccion',
          fecha: '2024-01-22',
          resultados: [
            'Modelo con R² de 0.89 en datos de prueba',
            'Error medio absoluto de $15,200 en predicciones',
            'Identificación de los factores más influyentes en el precio',
            'Implementación de una API para integración con aplicaciones web'
          ]
        },
        // Resto de proyectos
      ];
      
      const selectedProject = projects.find(p => p.id === parseInt(id));
      
      if (selectedProject) {
        setProject(selectedProject);
        setLoading(false);
      } else {
        setError('Proyecto no encontrado');
        setLoading(false);
      }
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-2">Cargando detalles del proyecto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          <i className="bi bi-exclamation-triangle me-2"></i>
          {error}
        </div>
        <Link to="/data-science" className="btn btn-primary">
          <i className="bi bi-arrow-left me-2"></i>
          Volver a proyectos
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
          <li className="breadcrumb-item"><Link to="/data-science">Proyectos de Data Science</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{project.titulo}</li>
        </ol>
      </nav>
      
      <div className="row">
        <div className="col-lg-8">
          <h1 className="mb-3">{project.titulo}</h1>
          
          <div className="mb-4">
            <span className="badge bg-primary me-2">{project.categoria}</span>
            <span className="text-muted">
              <i className="bi bi-calendar me-1"></i>
              {new Date(project.fecha).toLocaleDateString()}
            </span>
          </div>
          
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Descripción del Proyecto</h5>
              <p className="card-text">{project.descripcion}</p>
              
              <div className="mt-4">
                <h6>Descripción Detallada</h6>
                {project.descripcionDetallada.split('\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Tecnologías Utilizadas</h5>
              <div className="mt-3">
                {project.tecnologias.map((tech, index) => (
                  <span key={index} className="badge bg-secondary me-2 mb-2 p-2">{tech}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Resultados y Logros</h5>
              <ul className="list-group list-group-flush mt-3">
                {project.resultados.map((resultado, index) => (
                  <li key={index} className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    {resultado}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card sticky-top" style={{ top: '20px' }}>
            <div className="card-body">
              <h5 className="card-title">Enlaces</h5>
              <div className="d-grid gap-3 mt-3">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <i className="bi bi-github me-2"></i>
                  Ver Código en GitHub
                </a>
                
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-success"
                  >
                    <i className="bi bi-play-fill me-2"></i>
                    Ver Demo
                  </a>
                )}
                
                <Link 
                  to="/data-science" 
                  className="btn btn-outline-secondary"
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Volver a Proyectos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;