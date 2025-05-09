import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [citas, setCitas] = useState(0);

  return (
    <div className="container">
      {/* Header with logos */}
      <header>
        <div className="logos">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="" alt="" />
          </a>
        </div>
        <h1 className="title">Veterinaria Huellitas 🐶🐱</h1>
        <p className="subtitle">Tu mascota en las mejores manos 🐾</p>
      </header>

      {/* Button to simulate scheduling an appointment */}
      <section className="card">
        <h2>Agendar Cita</h2>
        <button onClick={() => setCitas(c => c + 1)} className="cta-button">
          Agendar cita ({citas})
        </button>
        <p>Haz clic para simular la reserva de una cita.</p>
      </section>

      {/* Services section */}
      <section className="card">
        <h2>Servicios</h2>
        <ul>
          <li>✔ Consultas médicas</li>
          <li>✔ Vacunas y desparasitación</li>
          <li>✔ Peluquería canina/felina</li>
          <li>✔ Urgencias 24/7</li>
        </ul>
      </section>

      {/* Footer with contact info */}
      <footer className="footer">
        <p>
          📍 Av. Central 456 – Huánuco | ☎ 987 654 321
        </p>
      </footer>
    </div>
  );
}

export default App;


