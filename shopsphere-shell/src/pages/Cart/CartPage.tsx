import { Link } from "react-router-dom";
import { useCart } from "../../state/CartContext";

function CartPage() {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container page">
        <div className="page-header">
          <h2>Your Cart</h2>
          <p>Your cart is currently empty.</p>
        </div>

        <Link
          to="/products"
          className="primary-button"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container page">
      <div className="page-header">
        <div>
          <span className="eyebrow dark">
            SHOPSPHERE
          </span>

          <h2>Your Cart</h2>

          <p>
            Review your items before checkout.
          </p>
        </div>

        <button
          className="secondary-button"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="cart-list">
        {cartItems.map((item) => (
          <article
            key={item.id}
            className="cart-item"
          >
            <div>
              <h3>{item.name}</h3>

              <p>{item.category}</p>

              <strong>
                ₹{item.price.toLocaleString("en-IN")}
              </strong>
            </div>

            <div className="cart-actions">
              <div className="quantity-controls">
                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  +
                </button>
              </div>

              <button
                className="secondary-button"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="cart-summary">
        <h3>
          Total: ₹
          {cartTotal.toLocaleString("en-IN")}
        </h3>

        <button className="primary-button">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;