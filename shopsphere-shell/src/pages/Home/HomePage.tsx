import { Link } from "react-router-dom";
import "./HomePage.css";
function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="eyebrow">WELCOME TO SHOPSPHERE</span>

            <h1>
              Everything you need.
              <br />
              <span>All in one place.</span>
            </h1>

            <p>
              Discover carefully selected products with a simple,
              seamless shopping experience.
            </p>

            <Link to="/products" className="primary-button">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      <section className="container features">
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>Fast Delivery</h3>
          <p>Get your products delivered quickly and safely.</p>
        </div>

        <div className="feature">
          <div className="feature-icon">🔒</div>
          <h3>Secure Shopping</h3>
          <p>Your information and payments are protected.</p>
        </div>

        <div className="feature">
          <div className="feature-icon">↩️</div>
          <h3>Easy Returns</h3>
          <p>Simple returns if something isn't right.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;