//Part 5: Step 3: Create HomePage.jsx
//Part 7: Step 2: Reading JSON files with useEffect

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';


function HomePage() {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await axios.get('/featured.json');
                setFeaturedProducts(response.data);
            } catch (error) {
                console.error('Error fetching featured products:', error);
            }
        };
        fetchFeaturedProducts();
    }, []);

    const renderFeaturedProducts = () => {
        const productElements = [];
        for (const product of featuredProducts) {
            productElements.push(
                <div key={product.id} className="col-md-3 mb-4">
                    <ProductCard
                        id={product.id}
                        imageUrl={product.image}
                        productName={product.name}
                        price={product.price.toFixed(2)}
                    />
                </div>
            );
        }
        return productElements;
    };

    return (
        <>
            <header className="bg-primary text-white text-left py-5"
                style={{ backgroundImage: "url('header_background.jpg')", backgroundSize: "cover" }}>
                <div className="container">
                    <h1 className="display-4" id="logo-font-1"><strong>Sam's Souvenirs</strong></h1>
                    <p className="flash-repeat" id="logo-font-2">Discover Singapore</p>
                    <a href="/products" className="btn btn-light btn-lg">Shop Now</a>
                </div>
            </header>

            <main className="container my-5">
                <h2 className="text-center mb-4">Top Picks of The Week</h2>
                <div className="row">
                    {renderFeaturedProducts()}
                </div>
            </main>
        </>
    );
}

export default HomePage;