import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductList = () => {
    const products = useLoaderData();
    console.log(products);
    const categoryName = products[0].category;
    return (
        <div className='mt-24 container mx-auto'>
            <h1 className='text-3xl font-semibold font-serif text-slate-600 bg-green-200 p-5 rounded-xl text-center'>Available {categoryName} are shown below!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-24 container mx-auto'>
                {
                    products.map(product => <label htmlFor={`my-modal-${product._id}`} key={product._id} className="card w-96 bg-base-100 shadow-xl cursor-pointer">
                        <figure><img src={product.image} alt="pictures of books" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {product.name}
                                <div className="badge badge-secondary text-slate-800 font-thin">{product.status}</div>
                            </h2>
                            <p>{product.description}..</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline bg-green-100">Condition: {product.condition}</div>
                                <div className="badge badge-outline bg-orange-100">Price: ${product.resalePrice}</div>
                            </div>
                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id={`my-modal-${product._id}`} className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor={`my-modal-${product._id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <figure className=''><img src={product.image} alt="pictures of books" className='rounded' /></figure>
                                    <br />
                                    <h3 className="text-lg font-bold">{product.name}</h3>
                                    <p className=""><span className='text-thin text-slate-400'>Details:</span> {product.description}..</p>
                                    <p><span className='text-thin text-slate-400'>Original Price:</span> ${product.originalPrice}</p>
                                    <p><span className='text-thin text-slate-400'>Years Of Use:</span> {product.yearsOfUse}</p>
                                    <p><span className='text-thin text-slate-400'>Posted On:</span> {product.postDate}</p>
                                    <p><span className='text-thin text-slate-400'>Seller Name:</span> {product.seller}</p>
                                    <p><span className='text-thin text-slate-400'>Seller Email:</span> {product.email}</p>
                                    <p><span className='text-thin text-slate-400'>Seller Phone Number: </span>+88{product.phone}</p>
                                    <div className="badge badge-outline bg-green-100">Condition: {product.condition}</div>
                                    <br />
                                    <div className="badge badge-outline bg-orange-100 mt-1">Price: ${product.resalePrice}</div>
                                    <br />
                                    <br />
                                    <div className='w-full flex justify-end'>
                                        <button className='btn border-none bg-gradient-to-r from-blue-400 to-lime-100 text-white'>Book Now!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>)
                }
            </div>
        </div>
    );
};

export default ProductList;