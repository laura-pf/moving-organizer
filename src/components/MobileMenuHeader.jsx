import { Link } from "react-router-dom";
import "../scss/components/MobileMenuHeader.scss";

function MobileMenuHeader() {
  return (
    <ul className="mobile-menu">
      <Link to="/info">
        <li className="nav-list-item">Sobre la APP</li>
      </Link>
      <Link to="/contact">
        <li className="nav-list-item">Contacto </li>
      </Link>
      <li className="nav-list-item">Cerrar sesión</li>
    </ul>
  );
}

export default MobileMenuHeader;
