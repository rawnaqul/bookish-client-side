import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertised = () => {

    //FIND PRODUCT BASED ON adSTATUS
    const { data: myProducts = [] } = useQuery({
        queryKey: ['advertisedProducts',],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertised`);
            const data = await res.json();
            return data
        }
    })
    console.log(myProducts);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-24 container mx-auto'>
            {
                myProducts.map(adProduct => <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={adProduct.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {adProduct.name}!
                            <div className="badge badge-secondary">OLD BOOK for resale!</div>
                        </h2>
                        <p>{adProduct.description}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Advertised;