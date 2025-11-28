import { Outlet } from 'react-router-dom';
import Header from './components/Header';

// base layout for all pages
function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
