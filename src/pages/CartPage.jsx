import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { clearCart } from '../store/cartSlice';

function CartPage() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // calculate summary values
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const delivery = items.length ? 40 : 0;
  const total = subtotal + delivery;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-page">
      {/* Top bar: heading + back to shopping */}
      <div className="cart-page-header">
        <h2>Cart</h2>

        <button
          type="button"
          className="back-shopping-btn"
          onClick={() => navigate('/')}
        >
          ← Continue shopping
        </button>
      </div>

      {/* Empty state */}
      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link to="/" className="checkout-btn">
            Browse products
          </Link>
        </div>
      ) : (
        <>
          {/* List of items */}
          <div className="cart-list">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Order summary + buttons */}
          <div className="cart-summary">
            <h3>Order Summary</h3>

            <p>
              <span>Items</span>
              <span>{items.length}</span>
            </p>
            <p>
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </p>
            <p>
              <span>Delivery</span>
              <span>₹{delivery.toFixed(2)}</span>
            </p>
            <p className="cart-summary-total">
              <strong>Total</strong>
              <strong>₹{total.toFixed(2)}</strong>
            </p>

            <button
              type="button"
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>

            <button
              type="button"
              className="clear-btn"
              onClick={handleClear}
            >
              Clear cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
