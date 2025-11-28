import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from '../store/cartSlice';

// top navigation + search + cart count
function Header() {
  const dispatch = useDispatch();

  const cartCount = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          ShoppyGlobe
        </Link>
      </div>

      <div className="header-center">
        <input
          type="text"
          placeholder="Search products..."
          onChange={e => dispatch(setSearchText(e.target.value))}
        />
      </div>

      <div className="header-right">
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </header>
  );
}

export default Header;
