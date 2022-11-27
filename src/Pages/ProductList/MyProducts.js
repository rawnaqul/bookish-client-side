import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/Authprovider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    // console.log("my product page", user);
    const [status, setStatus] = useState();

    //FIND PRODUCT BASED ON EMAIL
    const { data: myProducts = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    })


    //REMOVE ACTION
    const handleRemoval = (id) => {
        const proceed = window.confirm('Click Okay to remove this product!');
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Removed successfully');
                        const remaining = myProducts.filter(odr => odr._id !== id);
                        myProducts(remaining);
                    }
                })
        }
    }


    //PRODUCT STATUS CHANGE
    const handleStatusChange = (id, status) => {
        const proceed = window.confirm('Change product status to Sold?');
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: !status })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Status Updated');
                    }
                })
        }
    }

    return (
        <div className='mt-24 text-xl font-serif container mx-auto'>
            <p className='text-center m-8'>Your Total Product Count: <span className='text-5xl ml-1'>{myProducts.length}</span></p>
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
                                        {product.status === true ?
                                            <button onClick={() => { handleStatusChange(product._id, product.status) }} className='btn btn-link'>Available</button>
                                            :
                                            <button className='btn btn-link  text-black'>Sold!</button>}
                                        <br />
                                        {/* {
                                            product.status === true ?
                                                <span className="badge badge-ghost badge-sm bg-green-200 font-sans p-3">Advertise this product</span> :
                                                <span className="badge badge-ghost badge-sm bg-red-200 font-sans p-3">Already Sold!</span>
                                        } */}
                                    </td>
                                    <td>
                                        {
                                            product.status === true ?
                                                <button className='btn btn-sm bg-green-300 text-black font-sans'>Advertise!</button> :
                                                <label>
                                                    <input type="checkbox" className="checkbox bg-green-300" defaultChecked />
                                                </label>
                                        }
                                    </td>
                                    <th>
                                        <button onClick={() => { handleRemoval(product._id) }} className="btn btn-ghost text-4xl text-slate-600 font-sans">🗑️</button>
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