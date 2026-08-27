import "./CartPage.css"
function CartPage() {
  return (
    <div className="container page">
      <div className="page-header">
        <span className="eyebrow dark">YOUR SHOPPING CART</span>
        <h2>Your Cart</h2>
        <p>Review your items before checkout.</p>
      </div>

      <div className="empty-cart">
        <div className="empty-cart-icon">🛒</div>

        <h3>Your cart is empty</h3>

        <p>
          Looks like you haven't added anything to your cart yet.
        </p>

        <a href="/products" className="primary-button">
          Start Shopping
        </a>
      </div>
    </div>
  );
}

export default CartPage;