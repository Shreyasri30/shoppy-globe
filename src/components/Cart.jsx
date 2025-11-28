import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  // calculate totals
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!items.length) {
    return (
      <div style={{ padding: '2rem', color: '#fff' }}>
        <h2>Your cart is empty</h2>
        <Link to="/">Go back to shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      <div className="cart-list">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} />

            <div className="cart-info">
              <h3>{item.title}</h3>
              <p>₹{item.price} x {item.quantity}</p>

              <div className="qty-controls">
                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                  }
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ₹{total.toFixed(2)}</h3>
        <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
