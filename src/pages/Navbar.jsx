import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${location.pathname === '/home' ? 'bg-dark' : 'bg-body-tertiary'}`} data-bs-theme={location.pathname === '/home' ? 'dark' : undefined}>
        <div className="container-fluid">
          <Link to="/login" className="navbar-brand">
            React Application Demo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/m2" className="nav-link">
                  m2
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
