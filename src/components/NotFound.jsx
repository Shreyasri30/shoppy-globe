import { Link, useRouteError } from 'react-router-dom';

// 404 fallback page (displays proper router error details)
function NotFound() {
  // Use the hook to get error data from the router, like 404 status
  const error = useRouteError();
  
  // Default values
  let status = 'Page Not Found';
  let statusText = 'The page you are looking for does not exist.';

  // If an error object exists, use its data for proper error details
  if (error) {
    status = error.status || 'Error';
    statusText = error.statusText || error.message || 'An unexpected error occurred.';
  }

  return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', color: '#ef4444' }}>{status}</h1>
      <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '1.5rem' }}>{statusText}</p>
      <Link 
        to="/" 
        style={{ 
          padding: '0.75rem 1.5rem', 
          backgroundColor: '#7c3aed', 
          color: 'white', 
          borderRadius: '0.375rem',
          textDecoration: 'none'
        }}
      >
        ← Go back home
      </Link>
    </div>
  );
}

export default NotFound;