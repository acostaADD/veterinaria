import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [citas, setCitas] = useState(0);
  const [showLocation, setShowLocation] = useState(false);

  const toggleLocation = () => {
    setShowLocation(!showLocation);
  };

  return (
    <div className="container">
      {/* Header con logos */}
      <header className="header-centered">
        <div className="logos-centered">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo" alt="React logo" />
          </a>
        </div>
        <h1 className="title-centered">Veterinaria Huellitas <span>🐶</span></h1>
        <p className="subtitle-centered">Tu mascota en las mejores manos <span>🐾</span></p>
      </header>

      {/* Contenido principal */}
      <div className="main-content-centered">
        {/* Botón para agendar cita */}
        <section className="card-centered">
          <h2 className="black-text">Agendar Cita</h2>
          <p className="black-text">Reserva una cita para tu mascota de forma rápida y sencilla.</p>
          <button onClick={() => setCitas(c => c + 1)} className="cta-button-centered">
            <span>Agendar cita</span> 
            <span>({citas})</span>
          </button>
        </section>

        {/* Sección de servicios */}
        <section className="card-centered">
          <h2 className="black-text">Nuestros Servicios</h2>
          <ul className="black-text">
            <li>Consultas médicas completas</li>
            <li>Vacunas y desparasitación</li>
            <li>Peluquería canina/felina</li>
            <li>Urgencias 24/7</li>
            <li>Cirugías y hospitalización</li>
            <li>Nutrición animal</li>
          </ul>
        </section>
      </div>

      {/* Sección de ubicación */}
      <div className="location-wrapper-centered">
        <button onClick={toggleLocation} className="location-button-centered">
          {showLocation ? 'Ocultar Ubicación' : 'Ver Ubicación y Contactos'}
        </button>
        
        {showLocation && (
          <div className="location-card-super-centered">
            <h2 className="black-text">📌 Nuestra Ubicación</h2>
            <div className="map-container-super-centered">
              <iframe
                title="Ubicación Veterinaria Huellitas - Jr. Hermilio Valdizán 750"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.847376221675!2d-76.2407229250196!3d-9.932253988123997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c30b4a526e4f%3A0x8d1b6f5b0d5b5b5b!2sJr.%20Hermilio%20Valdiz%C3%A1n%20750%2C%20Hu%C3%A1nuco%2010001!5e0!3m2!1ses!2spe!4v1712345678901!5m2!1ses!2spe"
                width="100%"
                height="300"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="contact-info-super-centered">
              <div className="contact-section-centered">
                <h3 className="black-text">📞 Contactos</h3>
                <p className="black-text">Teléfono: 987 654 321</p>
                <p className="black-text">Emergencias: 987 654 322</p>
                <p className="black-text">Email: contacto@huellitas.com</p>
              </div>
              
              <div className="schedule-section-centered">
                <h3 className="black-text">🕒 Horario de Atención</h3>
                <p className="black-text">Lunes a Viernes: 8:00 am - 8:00 pm</p>
                <p className="black-text">Sábados: 9:00 am - 4:00 pm</p>
                <p className="black-text">Emergencias: 24/7</p>
              </div>
            </div>
            
            <div className="social-media-super-centered">
              <h3 className="black-text">🌐 Síguenos en Redes</h3>
              <div className="social-icons-super-centered">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link-centered">
                  <span className="icon">📱</span> Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link-centered">
                  <span className="icon">📷</span> Instagram
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link-centered">
                  <span className="icon">🐦</span> Twitter
                </a>
                <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-link-centered">
                  <span className="icon">💬</span> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer-super-centered">
        <p className="black-text">
          <span>📍</span> Jr. Hermilio Valdizán 750 - Huánuco
        </p>
        <p className="black-text">
          <span>☎</span> 987 654 321
        </p>
      </footer>
    </div>
  );
}

export default App;

