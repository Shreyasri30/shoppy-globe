import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound';

// lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));

// app routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <HomePage />
          </Suspense>
        )
      },
      {
        path: '/products/:id',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProductDetail />
          </Suspense>
        )
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <CartPage />
          </Suspense>
        )
      },
      {
        path: '/checkout',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <CheckoutPage />
          </Suspense>
        )
      }
    ]
  }
]);

export default router;
