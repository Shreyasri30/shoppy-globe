import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import PropTypes from 'prop-types'; 

// single product card
function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={`Image of ${product.title}`}
          loading="lazy"
          className="product-image"
        />
      </Link>

      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">₹{product.price}</p>

      <div className="product-actions">
        <Link to={`/products/${product.id}`}>View details</Link>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

// PropType Addition
ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;