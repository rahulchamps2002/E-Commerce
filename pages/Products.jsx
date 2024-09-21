import React from 'react';
import ProductCard from '../pages/ProductCard'; // Import ProductCard component

const Products = () => {
    const productList = [
        { id: 1, name: 'Product 1', description: 'Description 1', price: 29.99 },
        { id: 2, name: 'Product 2', description: 'Description 2', price: 49.99 },
        { id: 3, name: 'Product 3', description: 'Description 3', price: 19.99 },
    ];

    return (
        <div className="products-container">
            <h2>Products</h2>
            <div className="product-list">
                {productList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
