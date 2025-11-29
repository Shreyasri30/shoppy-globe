import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Payment and place order page
function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(state => state.cart.items);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 0 ? 40 : 0;
  const total = subtotal + delivery;

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: ''
  });

  const handleChange = e => {
  setUserInfo({
    ...userInfo,
    [e.target.name]: e.target.value
  });
};

//error handling to place order
  const handleOrder = () => {
    if (!userInfo.name || !userInfo.email || !userInfo.address) {
      alert('Please fill all details');
      return;
    }

    // In a real app, you would send userInfo and items to a server here.
    
    dispatch(clearCart());
    setOrderPlaced(true);
  };

  // auto redirect after order is placed
  useEffect(() => {
    if (orderPlaced) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000); // 2 seconds

      return () => clearTimeout(timer);
    }
  }, [orderPlaced, navigate]);

  if (orderPlaced) {
    return (
      <div className="checkout-container" style={{ textAlign: 'center', padding: '4rem', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.05)' }}>
        <h2 style={{ color: '#059669', marginBottom: '1rem' }}>🎉 Order Placed Successfully!</h2>
        <p style={{ color: '#4b5563', fontSize: '1.1rem', marginBottom: '2rem' }}>Thank you for shopping with ShoppyGlobe. Redirecting in a moment...</p>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-content">
        
        {/* SHIPPING FORM*/}
        <div className="checkout-form">
          <h3>Shipping Details</h3>

          {/* Full Name Field */}
          <div className="form-field">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              className="form-input"
              placeholder="Enter your full name"
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className="form-input"
              type="email"
              placeholder="Enter your email address"
              onChange={handleChange}
            />
          </div>

          {/* Address Field */}
          <div className="form-field">
            <label htmlFor="address">Delivery Address</label>
            <textarea
              id="address"
              name="address"
              className="form-textarea"
              rows="3"
              placeholder="Enter your full delivery address"
              onChange={handleChange}
            />
          </div>
        </div>
        
        {/* ORDER SUMMARY */}
        <div className="summary-box">
          <h3>Order Summary</h3>
          <p><span>Items:</span> <strong>{items.length}</strong></p>
          <p><span>Subtotal:</span> <strong>₹{subtotal.toFixed(2)}</strong></p>
          <p><span>Delivery:</span> <strong>₹{delivery}</strong></p>
          
          <h3><span>Total:</span> <span>₹{total.toFixed(2)}</span></h3>

          {/* BUTTON - WITH CLASS NAME */}
          <button onClick={handleOrder} className="place-order-button">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;