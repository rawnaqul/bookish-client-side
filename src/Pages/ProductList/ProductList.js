import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductList = () => {
    const products = useLoaderData();
    return (
        <div>
            <p className='text-8xl text-center my-16 container mx-auto'>{products.length}</p>
        </div>
    );
};

export default ProductList;