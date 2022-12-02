import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/Buttons/PrimaryButton';
import { AuthContext } from '../../../context/AuthProvider/Authprovider';

const Categories = ({ categories }) => {
    const { user, loader } = useContext(AuthContext);

    const handlePrivateRoute = () => {
        if (!user) {
            toast.error('You have to log in first!')
        }
    }

    return (
        <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
            {categories.map(category =>
                <div key={category._id} className=''>
                    <div className="card h-96 bg-base-100 shadow-xl image-full">
                        <figure className='object-cover'><img className='' src={category.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-5xl font-serif">{category.name}!</h2>
                            <p>{category.descrition}</p>
                            <Link onClick={handlePrivateRoute} to={`/productlist/${category.name}`} className="card-actions justify-end">
                                <PrimaryButton>View Products!</PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Categories;