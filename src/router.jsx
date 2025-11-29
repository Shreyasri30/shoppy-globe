import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
// import NotFound from './components/NotFound'; // REMOVED STATIC IMPORT

// lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
// ADDED LAZY LOAD FOR NotFound
const NotFound = lazy(() => import('./components/NotFound')); 

// app routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Wrapped NotFound in Suspense to implement lazy loading for the error element
    errorElement: (
      <Suspense fallback={<p style={{ textAlign: 'center', padding: '2rem' }}>Loading error page...</p>}>
        <NotFound />
      </Suspense>
    ), 
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