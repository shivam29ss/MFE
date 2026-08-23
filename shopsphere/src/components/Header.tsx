import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          Shop<span>Sphere</span>
        </Link>

        <nav className="nav">
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/account">Account</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;