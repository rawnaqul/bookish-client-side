import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const ProductList = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const products = useLoaderData();
    console.log(products);
    const categoryName = products[0].category;
    const dated = new Date();
    console.log(dated);
    return (
        <div className='mt-24 container mx-auto'>
            <h1 className='text-3xl font-semibold font-serif text-slate-600 bg-green-200 p-5 rounded-xl text-center'>Available {categoryName} are shown below!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-24 container mx-auto'>
                {
                    products.map(product => <label htmlFor={`my-modal-${product._id}`} key={product._id} className="card w-96 bg-base-100 shadow-xl cursor-pointer">
                        <figure><img src={product.image} alt="pictures of books" className='h-96' /></figure>
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
                                    <p className='text-thin text-slate-400'><span className=''>Posted On:</span> {product.postDate}</p>
                                    <p className=""><span className='text-thin text-slate-400'>Details:</span> {product.description}..</p>
                                    <p><span className='text-thin text-slate-400'>Original Price:</span> ${product.originalPrice}</p>
                                    <p><span className='text-thin text-slate-400'>Years Of Use:</span> {product.yearsOfUse}</p>
                                    <p><span className='text-thin text-slate-400'>Seller Name:</span> {product.seller}</p>
                                    <p><span className='text-thin text-slate-400'>Seller Email:</span> {product.email}</p>
                                    <p><span className='text-thin text-slate-400'>Seller Phone Number: </span>+88{product.phone}</p>
                                    <div className="badge badge-outline bg-green-100">Condition: {product.condition}</div>
                                    <br />
                                    <div className="badge badge-outline bg-orange-100 mt-1">Price: ${product.resalePrice}</div>
                                    <br />
                                    <br />
                                    <div className='w-full flex justify-end'>
                                        {/* The button to open BOOK NOW modal */}
                                        <label htmlFor={`my-booking-${product._id}`} className='btn border-none bg-gradient-to-r from-blue-400 to-lime-100 text-white'>Book Now!</label>

                                        {/* Put this part before </body> tag */}
                                        <input type="checkbox" id={`my-booking-${product._id}`} className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-thin text-slate-400 text-sm block">Fill out This form to book this Item: <span className='font-bold text-3xl font-serif text-slate-700'> {product.name} </span></h3>
                                                <div className="avatar">
                                                    <div className="w-24 rounded">
                                                        <img src={product.image} alt="" />
                                                    </div>
                                                </div>
                                                <form className="py-4">
                                                    <br />
                                                    <label className='font-thin text-slate-400 text-sm block'>Seller Name</label>
                                                    <input {...register("name")} placeholder="Name" type="text" className='input input-bordered input-sm w-full max-w-xs my-2' defaultValue={product.seller} disabled />
                                                    <br />
                                                    <label className='font-thin text-slate-400 text-sm block'>Email</label>
                                                    <input {...register("email")} placeholder="email" type="email" className='input input-bordered input-sm w-full max-w-xs my-2' defaultValue={product.email} disabled />
                                                    <br />
                                                    <label className='font-thin text-slate-400 text-sm block'>Item Name</label>
                                                    <input {...register("name")} placeholder="Name" type="text" className='input input-bordered input-sm w-full max-w-xs my-2' defaultValue={product.name} disabled />
                                                    <br />
                                                    <label className='font-thin text-slate-400 text-sm block'>Item Re-sale Price</label>
                                                    <input {...register("price")} placeholder="Price" type="text" className='input input-bordered input-sm w-full max-w-xs my-2' defaultValue={product.resalePrice} disabled />
                                                    <br />
                                                    <label className='font-thin text-slate-400 text-sm block'>Meeting Location</label>
                                                    <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs my-2" />
                                                    <br />
                                                    <label className='font-thin text-slate-400 text-sm block'>Your Mobile Phone Number</label>
                                                    <input type="number" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs my-2" />
                                                    <div className="modal-action">
                                                        <label htmlFor={`my-booking-${product._id}`} className="">
                                                            <button className='btn btn-success text-white font-semibold opacity-50'>Submit!</button>
                                                        </label>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
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