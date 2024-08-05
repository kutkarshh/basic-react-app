import React, { useState } from "react";

import './style.css';

interface ProductItemProps {
    product: string
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        if (counter > 0)
            setCounter(counter - 1);
    }

    return (
        <div className="product-item">
            <h4>{product}</h4>
            <hr />
            <div>
                <h3>{counter}
                    <button className="btn1" onClick={handleIncrement}>Add +</button>
                    <button className="btn2" onClick={handleDecrement}>Remove -</button>
                </h3>
            </div>
        </div>
    );
}

export default ProductItem;