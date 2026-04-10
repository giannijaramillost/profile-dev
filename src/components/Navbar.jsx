import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="container-navbar">
        <div className="links">
          <p>
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Link>
          </p>
          <p>
            <Link to="/about" className={isActive('/about') ? 'active' : ''}>
              About Me
            </Link>
          </p>
          <p>
            <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
              Projects
            </Link>
          </p>
          <p>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
              Contact
            </Link>
          </p>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;