import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 

// base layout for all pages
function App() {
  return (
    <div className="app"> {/* Added div for full page flex container for footer */}
      <Header />
      <main className="main-content"> {/* Use main-content class for max-width and padding */}
        <Outlet />
      </main>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default App;