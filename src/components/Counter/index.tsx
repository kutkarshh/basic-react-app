import React from "react";

import ProductItem from "./ProductItem";

import './style.css';

interface ProductProps {
    products: string[];
}

const Counter: React.FC<ProductProps> = ({ products }) => {
    // Using Counter Concept in React JS
    return (
        <div className="counter-container">
            <h2>Buy Products</h2>
            {products.map((product) => <ProductItem product={product} />)}
        </div>
    );
}

export default Counter;