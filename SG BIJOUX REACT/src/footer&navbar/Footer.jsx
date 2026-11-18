
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h3>SG Bijoux</h3>
          <p>
            Joyería artesanal de calidad,
            creada con pasión y dedicación.
          </p>
        </div>

        <div className="footer-column">
          <h4>Comprar</h4>
          <ul>
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/historial">Historial</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Ayuda</h4>
          <ul>
            <li><Link to="/pqrs">Contacto y PQRS</Link></li>
            <li><Link to="/devoluciones">Devoluciones</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Síguenos</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 SG Bijoux. Todos los derechos reservados.
      </div>

    </footer>
  );
}

export default Footer;
