
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {

  const [menuAbierto, setMenuAbierto] = useState(false);
  const [perfilAbierto, setPerfilAbierto] = useState(false);

  return (
    <header className="header">

      <nav className="navbar container">

        {/* LOGO */}
        <Link to="/" className="logo">
          <img
            src="/img/elementos/LOGO_white.png"
            alt="SG Bijoux"
          />
        </Link>

        {/* BOTON CELULAR */}
        <button
          className="menu-toggle"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
        >
          <i className="bi bi-list"></i>
        </button>

        {/* MENU PRINCIPAL */}
        <div className={`navbar-content ${menuAbierto ? "show" : ""}`}>

          <ul className="nav-menu">

            <li>
              <NavLink to="/" end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }>
                Inicio
              </NavLink>
            </li>

            <li>
              <NavLink to="/catalogo"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }>
                Catálogo
              </NavLink>
            </li>

            <li>
              <NavLink to="/nosotros"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }>
                Sobre Nosotros
              </NavLink>
            </li>

          </ul>

          {/* ICONOS */}
          <div className="nav-icons">

            {/* PERFIL */}
            <div className="profile-container">

              <button
                className="profile-icon"
                onClick={() => setPerfilAbierto(!perfilAbierto)}
                aria-label="Abrir perfil"
                aria-expanded={perfilAbierto}
              >
                <i className="bi bi-person"></i>
              </button>

              {perfilAbierto && (
                <div className="profile-dropdown">

                  <Link to="/login">
                    <i className="bi bi-box-arrow-in-right"></i>
                    Iniciar sesión
                  </Link>

                  <Link to="/perfil">
                    <i className="bi bi-person"></i>
                    Mi perfil
                  </Link>

                  <Link to="/mis-pedidos">
                    <i className="bi bi-box-seam"></i>
                    Mis pedidos
                  </Link>

                </div>
              )}

            </div>

            {/* NOTIFICACIONES */}
            <Link to="/notificaciones" aria-label="Notificaciones">
              <i className="bi bi-bell"></i>
            </Link>

            {/* CARRITO */}
            <Link to="/carrito" aria-label="Carrito">
              <i className="bi bi-cart3"></i>
            </Link>

          </div>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;
