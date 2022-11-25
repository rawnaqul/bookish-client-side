import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <p></p>
        </div>
    );
};

export default ProductDetails;