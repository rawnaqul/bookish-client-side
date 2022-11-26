import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/Authprovider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    console.log("my product page", user);

    const { data: myProducts = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    })

    return (
        <div className='mt-24 text-xl font-serif container mx-auto'>
            <p className='text-center m-8'>Your Total Product Number: {myProducts.length}</p>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" disabled />
                                </label>
                            </th>
                            <th>Product Name</th>
                            <th>Product Status</th>
                            <th>Advertise Product</th>
                            <th>Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            myProducts.map(product =>
                                <tr key={product._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={product.image} alt="Product-X" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product.name}</div>
                                                <div className="text-sm opacity-50">Condition: <span className='text-green-600'>{product.condition}</span></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {product.adStatus === true ? "Available!" : "Sold."}
                                        <br />
                                        {
                                            product.adStatus === true ?
                                                <span className="badge badge-ghost badge-sm bg-green-200 font-sans p-3">Advertise this product</span> :
                                                <span className="badge badge-ghost badge-sm bg-red-200 font-sans p-3">Already Sold!</span>
                                        }
                                    </td>
                                    <td>
                                        {
                                            product.adStatus === true ?
                                                <button className='btn btn-sm bg-green-300 text-black font-sans'>Advertise!</button> :
                                                <label>
                                                    <input type="checkbox" className="checkbox bg-green-300" defaultChecked />
                                                </label>
                                        }
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost bg-red-300 text-slate-600 font-sans">Remove</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;