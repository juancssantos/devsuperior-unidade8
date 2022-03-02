import { Link } from "react-router-dom";

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar main-nav">
      <Link to="/" className="nav-logo-text">
        <h5>Github API</h5>
      </Link>
    </nav>
  );
};

export default Navbar;
