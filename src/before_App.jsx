import '../styles.css';
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function App() {
  {/* Part 3 */}
  const [isNavbarShowing, setNavbarShowing] = useState(false);
  // Toggle the collapse state
  const toggleNavbar = () => {
    setNavbarShowing(!isNavbarShowing);
  };
  
  {/* Part4 */ }
  // Sync the collapse state with screen size
  useEffect(() => {
    const syncNavbarState = () => {
      setNavbarShowing(window.innerWidth >= 992); // Show if larger than 992px, otherwise don't show
    };

    syncNavbarState(); // Run on mount to set the initial state

    // Listen for window resize events
    window.addEventListener('resize', syncNavbarState);

    // Cleanup the listener on unmount
    return () => window.removeEventListener('resize', syncNavbarState);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">E-Shop</a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Added ternary operator: ${isNavbarShowing ? "show" : "" */}
          <div className={`collapse navbar-collapse ${isNavbarShowing ? "show" : ""}`}
            id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to E-Shop</h1>
          <p className="lead">Discover amazing products at unbeatable prices!</p>
          <a href="#" className="btn btn-light btn-lg">Shop Now</a>
        </div>
      </header>

      <main className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>

        {/* Product Cards */}
        <div className="row">
          <div className="col-md-3 mb-4">
            <ProductCard
              imageUrl="https://picsum.photos/id/20/300/200"
              productName="Product 1"
              price="19.99"
            />
          </div>

          <div className="col-md-3 mb-4">
            <ProductCard
              imageUrl="https://picsum.photos/id/1/300/200"
              productName="Product 2"
              price="29.99"
            />
          </div>

          <div className="col-md-3 mb-4">
            <ProductCard
              imageUrl="https://picsum.photos/id/26/300/200"
              productName="Product 3"
              price="39.99"
            />
          </div>

          <div className="col-md-3 mb-4">
            <ProductCard
              imageUrl="https://picsum.photos/id/96/300/200"
              productName="Product 4"
              price="49.99"
            />
          </div>
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2023 E-Shop. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;