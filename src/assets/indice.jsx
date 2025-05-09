// src/Indice.jsx
import './App.css';
import { useNavigate } from 'react-router-dom';

function Indice() {
  const navigate = useNavigate();

  const servicios = [
    "Consulta General",
    "Vacunación",
    "Desparasitación",
    "Control de Crecimiento",
    "Emergencias",
    "Nutrición y Dietas"
  ];

  return (
    <div className="container">
      <h1 className="title-centered">Selecciona un Servicio</h1>
      <ul className="main-content-centered black-text">
        {servicios.map((servicio, index) => (
          <li key={index} className="card-centered">
            <h3>{servicio}</h3>
            <button
              className="cta-button-centered"
              onClick={() => alert(`Servicio seleccionado: ${servicio}`)}
            >
              Seleccionar
            </button>
          </li>
        ))}
      </ul>

      <button className="cta-button-centered" onClick={() => navigate('/')}>
        Volver al Inicio
      </button>
    </div>
  );
}

export default Indice;
