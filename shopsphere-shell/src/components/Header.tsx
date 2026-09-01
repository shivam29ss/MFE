import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useCart } from "../state/CartContext";
import { useAuth } from "../auth/AuthContext";

function Header() {
  const { cartCount } = useCart();
   const {
    user,
    isAuthenticated,
    logout,
  } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          Shop<span>Sphere</span>
        </Link>

        <nav className="nav">
           <Link to="/">Home</Link>

          <Link to="/products">Products</Link>
         <Link to="/cart">
            Cart ({cartCount})
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/account">
                {user?.name}
              </Link>

              <button
                className="secondary-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;