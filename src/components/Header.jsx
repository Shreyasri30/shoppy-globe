import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, selectCartCount } from '../store/cartSlice';
import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  const handleSearchChange = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <Link to="/" className="header-logo">
          Shoppy<span>Globe</span>
        </Link>

        {/* Search */}
        <div className="header-search">
          <input
            type="text"
            placeholder="Search products..."
            onChange={handleSearchChange}
          />
        </div>

        {/* Cart */}
        <div className="header-cart">
        <Link to="/cart" className="nav-cart">
          🛒 Cart ({cartCount})
        </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
