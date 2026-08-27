import { Link } from "react-router-dom";
import "./ProductsPage.css";
const products = [
  {
    id: 1,
    name: "MacBook Pro",
    description: "Powerful laptop for professionals.",
    price: 149999,
    category: "Laptop"
  },
  {
    id: 2,
    name: "iPhone",
    description: "Powerful performance in your pocket.",
    price: 79999,
    category: "Smartphone"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    description: "Premium noise cancelling headphones.",
    price: 29999,
    category: "Audio"
  }
];

function ProductsPage() {
  return (
    <div className="container page">
      <div className="page-header">
        <div>
          <span className="eyebrow dark">SHOPSPHERE</span>
          <h2>Trending Products v2</h2>
          <p>Explore our selection of popular products.</p>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <Link to={`${product.id}`} key={product.id} className="product-link">
          <article className="product-card">
            <div className="product-image">
              <span>{product.category}</span>
            </div>

            <div className="product-content">
              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <div className="product-footer">
                <strong>
                  ₹{product.price.toLocaleString("en-IN")}
                </strong>

                <button
                 
                  className="secondary-button"
                >
                  View
                </button>
              </div>
            </div>
          </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;