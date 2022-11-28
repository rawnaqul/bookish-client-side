import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AddProduct from './AddProduct';

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
        <div className="carousel carousel-center p-4 space-x-4 rounded-box bg-slate-200 h-96 lg:h-[600px]">
            {
                myProducts.map(adProduct =>
                    <div key={adProduct._id} className="carousel-item">
                        <img src={adProduct.image} alt="advertisement" className="rounded-box" />
                        {/* <div className="card w-96 bg-base-100 shadow-xl image-full ">
                            <figure><img src={adProduct.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                )
            }
        </div>
    );
};

export default Advertised;