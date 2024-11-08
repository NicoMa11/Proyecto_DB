import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <h1>DeliGestión</h1>
      <h2>Delicias de mi tierra</h2>
      <div className="button-group">
        <Link to="/menu">
          <button>Menú</button>
        </Link>
        <Link to="/orders">
          <button>Pedidos</button>
        </Link>
        <Link to="/inventary">
          <button>Inventario</button>
        </Link>
        <Link to="/clients">
        <button>Clientes</button>
        </Link>
        <Link to="/employees">
        <button>Empleados</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

