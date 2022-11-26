import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/Authprovider';

const ProductList = () => {

    const { user } = useContext(AuthContext);

    const products = useLoaderData();
    const [bookingModal, setBookingModal] = useState(true);

    const categoryName = products[0].category;

    // console date and time
    const dated = new Date();
    console.log(dated);


    //booking fuction
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const productName = form.productName.value;
        const resalePrice = form.resalePrice.value;
        const meetingLocation = form.meetingLocation.value;
        const buyerPhone = form.buyerPhone.value;


        const bookingInfo = {
            buyerName,
            buyerEmail,
            productName,
            resalePrice,
            meetingLocation,
            buyerPhone,
            productStatus: true
        }



        //CRUD booking info
        fetch('http://localhost:5000/bookinginfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {

                setBookingModal(false)
            })
            .catch(error => console.log(error))

    }

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
                                    <figure className=''><img src={product.image} alt="pictures of books" className='rounded h-56' /></figure>
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
                                        <label htmlFor={`my-booking-${product._id}`} className='btn border-none bg-gradient-to-r from-blue-500 to-lime-600 text-white opacity-60'>Book Now!</label>

                                        {/* Put this part before </body> tag */}
                                        <input type="checkbox" id={`my-booking-${product._id}`} className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-thin text-slate-400 text-sm block">Fill out the form to book this Item: <span className='font-bold text-2xl font-serif text-slate-700 '> {product.name} </span></h3>
                                                {/* <div className="avatar">
                                                    <div className="w-24 rounded">
                                                        <img src={product.image} alt="" />
                                                    </div>
                                                </div> */}
                                                {/*onSubmit={handleSubmit(handleBooking)}*/}
                                                <form className="py-6" onSubmit={handleBooking}>
                                                    <br />
                                                    <label className='font-thin text-slate-400 text-sm block'>Your Name</label>
                                                    <input name="buyerName" placeholder="Name" type="text" className='input input-bordered input-sm w-full max-w-xs my-2' value={user?.displayName} disabled />
                                                    <br />
                                                    <label className='font-thin text-slate-400 text-sm block'>Email</label>
                                                    <input name="buyerEmail" placeholder="email" type="email" className='input input-bordered input-sm w-full max-w-xs my-2' defaultValue={user?.email} disabled />
                                                    <br />
                                                    <label className='font-thin text-slate-400 text-sm block'>Item Name</label>
                                                    <input name="productName" placeholder="Name" type="text" className='input input-bordered input-sm w-full max-w-xs my-2' defaultValue={product.name} disabled />
                                                    <br />
                                                    <label className='font-thin text-slate-400 text-sm block'>Item Re-sale Price</label>
                                                    <input name="resalePrice" placeholder="Price" type="text" className='input input-bordered input-sm w-full max-w-xs my-2' defaultValue={product.resalePrice} disabled />
                                                    <br />
                                                    <label className='font-thin text-slate-400 text-sm block'>Meeting Location</label>
                                                    <input name="meetingLocation" type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs my-2" />
                                                    <br />
                                                    <label className='font-thin text-slate-400 text-sm block'>Your Mobile Phone Number</label>
                                                    <input name="buyerPhone" type="number" placeholder="Moblie Phone Number" className="input input-bordered input-md w-full max-w-xs my-2" required />
                                                    <div className="modal-action">

                                                        <input type="submit" value='Confirm Booking' className='btn btn-success text-white font-semibold opacity-50 w-full' />

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