import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/Authprovider';

const AddProduct = () => {

    const { user } = useContext(AuthContext);

    /*
    user,
        createUser,
        signIn,
        updateUserInfo,
        logOut,
        loader
    */

    const todayDate = new Date();
    const postDate = format(todayDate, 'PP')

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const pickLocation = form.pickLocation.value;
        const description = form.description.value;
        const yearOfPurchase = form.yearOfPurchase.value;
        const resalePrice = form.resalePrice.value;
        const category = form.category.value;
        const originalPrice = form.originalPrice.value;
        const yearsOfUse = form.yearsOfUse.value;

        // console.log(postDate, slot, name, phone, email);


        const product = {
            name: name,
            seller: user?.displayName,
            email: user?.email,
            image,
            condition,
            postDate,
            phone,
            pickLocation,
            description,
            yearOfPurchase,
            resalePrice,
            category,
            status: true,
            adStatus: false,
            verifySeller: '',
            originalPrice,
            yearsOfUse,
        }

        fetch('https://server-bice-beta.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Product added!')
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='container mx-auto mt-28 lg:w-4/12 w-6/12'>
            <h1 className='font-bold font-serif text-4xl text-slate-600'>Add a book to Re-sale!</h1>
            <p className='text-slate-400'>Make sure to advertise your book!</p>
            <br />
            <form onSubmit={handleBooking} className='mt-10 grid grid-cols-1 gap-4'>
                <input name="name" type="text" placeholder="Product Name" className="input input-bordered w-full" />
                <input name="image" type="text" placeholder="Place your product image link" className="input input-bordered w-full" />
                <select name='condition' className="select select-bordered w-full" required>
                    <option disabled >Select your product condition</option>
                    <option>Excelent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
                <input name="phone" type="number" placeholder="Enter your phone number" className="input input-bordered w-full" />
                <input name="pickLocation" type="text" placeholder="Enter the pick-up location" className="input input-bordered w-full" />
                <input name="description" type="text" placeholder="Product description" className="input input-bordered w-full" />
                <input name="yearOfPurchase" type="number" placeholder="Purchase year" className="input input-bordered w-full" />
                <input name="resalePrice" type="number" placeholder="Selling price" className="input input-bordered w-full" />
                <select name='category' className="select select-bordered w-full" required>
                    <option disabled>Select the category</option>
                    <option>Second-hand Books</option>
                    <option>Collectible Books</option>
                    <option>Old Magazines</option>
                </select>
                <input name="originalPrice" type="number" placeholder="Buying price" className="input input-bordered w-full" />
                <input name="yearsOfUse" type="number" placeholder="Year of use" className="input input-bordered w-full" />
                <button className='btn btn-success bg-green-200 border-2 text-slate-600'>Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;

