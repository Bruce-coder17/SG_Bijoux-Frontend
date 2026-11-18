
import { Routes, Route } from "react-router-dom";
import Layout from "./footer&navbar/Layout";

function PaginaBase({ titulo }) {
  return (
    <div className="page-container">
      <h1 className="page-title">{titulo}</h1>
      <p className="page-description">
        Módulo en proceso de desarrollo.
      </p>

      <div className="card">
        <p>
          Aquí se desarrollará el contenido de esta sección.
        </p>
      </div>
    </div>
  );
}

function App() {

  return (
    <Routes>

      {/* ESTRUCTURA GENERAL */}
      <Route element={<Layout />}>

        {/* PAGINAS PRINCIPALES */}
        <Route path="/" element={<PaginaBase titulo="Inicio" />} />
        <Route path="/catalogo" element={<PaginaBase titulo="Catálogo" />} />
        <Route path="/nosotros" element={<PaginaBase titulo="Sobre Nosotros" />} />

        {/* AUTENTICACION */}
        <Route path="/login" element={<PaginaBase titulo="Iniciar Sesión" />} />
        <Route path="/registro" element={<PaginaBase titulo="Registro" />} />

        {/* ADMINISTRACION */}
        <Route path="/usuarios" element={<PaginaBase titulo="Gestión de Usuarios" />} />
        <Route path="/inventario" element={<PaginaBase titulo="Inventario" />} />
        <Route path="/reportes" element={<PaginaBase titulo="Reportes" />} />

        {/* VENDEDOR */}
        <Route path="/pedidos" element={<PaginaBase titulo="Gestión de Pedidos" />} />
        <Route path="/devoluciones" element={<PaginaBase titulo="Devoluciones" />} />
        <Route path="/pqrs" element={<PaginaBase titulo="PQRS" />} />

        {/* CLIENTE */}
        <Route path="/perfil" element={<PaginaBase titulo="Mi Perfil" />} />
        <Route path="/carrito" element={<PaginaBase titulo="Carrito" />} />
        <Route path="/mis-pedidos" element={<PaginaBase titulo="Mis Pedidos" />} />
        <Route path="/notificaciones" element={<PaginaBase titulo="Notificaciones" />} />
        <Route path="/historial" element={<PaginaBase titulo="Historial de Compras" />} />

        {/* PAGINA NO ENCONTRADA */}
        <Route path="*" element={<PaginaBase titulo="Página no encontrada" />} />

      </Route>

    </Routes>
  );
}

export default App;
