import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo">
          URBAN THREADS
        </Link>

        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">Inicio</Link>
          </li>
          <li>
            <Link to="/products" className="navbar-link">Productos</Link>
          </li>
          <li>
            <Link to="/contacto" className="navbar-link">Contacto</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;