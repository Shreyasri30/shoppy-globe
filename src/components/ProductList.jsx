import { useSelector } from 'react-redux';
import useProducts from '../hooks/useProducts';
import ProductItem from './ProductItem';

// list of products + search filter
function ProductList() {
  const { products, loading, error } = useProducts();
  const searchText = useSelector(state => state.cart.searchText).toLowerCase();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchText)
  );

  if (!filtered.length) {
    return <p>No products found.</p>;
  }

  return (
    <div className="product-grid">
      {filtered.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
