import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

function ProductDetail() {
  const { id } = useParams(); // get product id from URL
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        // Using axios
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (e) {
        console.log('Error loading product');
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <p style={{ padding: '1rem' }}>Loading product...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="detail-container">
      <Link to="/" className="back-btn">← Back</Link>

      <div className="detail-card">
        <img
          src={product.thumbnail}
          alt={`Image of ${product.title}`}
          className="detail-image"
        />

        <div className="detail-info">
          <h2>{product.title}</h2>
          <p className="detail-price">₹{product.price}</p>
          <p className="detail-desc">{product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> ⭐ {product.rating}</p>

          <button
            className="add-to-cart-btn"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;