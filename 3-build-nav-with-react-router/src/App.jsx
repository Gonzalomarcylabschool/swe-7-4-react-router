import './App.css'

import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import Product from './pages/Product';

export default function App() {
  return (
    <>
      <NavBar />
      <main>
         <Dashboard />
          <About />
          <Products />
          <Product />
          <NotFound />
      </main>
      <footer></footer>
    </>
  )
}