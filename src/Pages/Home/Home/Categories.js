import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/Buttons/PrimaryButton';

const Categories = ({ categories }) => {

    return (
        <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {categories.map(category =>
                <div key={category._id} className=''>
                    <div className="card h-96 bg-base-100 shadow-xl image-full">
                        <figure className='object-cover'><img className='' src={category.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-5xl font-serif">{category.name}!</h2>
                            <p>{category.descrition}</p>
                            <Link to={`/productlist/${category.name}`} className="card-actions justify-end">
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