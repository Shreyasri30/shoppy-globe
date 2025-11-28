import { useEffect, useState } from 'react';
import axios from 'axios';

// fetch product list from API
function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await axios.get('https://dummyjson.com/products');
        setProducts(res.data.products || []);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}

export default useProducts;
