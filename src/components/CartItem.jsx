import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../store/cartSlice';

//Features of items in cart page
function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    const nextQty = item.quantity - 1;
    if (nextQty >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity: nextQty }));
    }
  };

  const handleIncrease = () => {
    const nextQty = item.quantity + 1;
    dispatch(updateQuantity({ id: item.id, quantity: nextQty }));
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-img" />

      <div className="cart-details">
        <h3>{item.title}</h3>
        <p>₹{item.price} × {item.quantity}</p>

        <div className="qty-controls">
          <button onClick={handleDecrease}>−</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>

//remove items from cart
        <button
          className="remove-btn"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
