import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { AuthContext } from '../../context/AuthProvider/Authprovider';
import { useUserVerify } from '../../useVerification/useUserVerify';
import Navbar from '../Home/Shared/Navbar/Navbar';

const Dashboard = () => {
    const { user, loader } = useContext(AuthContext);
    console.log(user.email);

    if (loader) {
        <Loader></Loader>
    }
    const [isSeller, isBuyer, isAdmin, isUserLoading] = useUserVerify(user);
    console.log(isSeller, isBuyer, isAdmin);


    if (isUserLoading) {
        <Loader></Loader>
    }

    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <nav className='mt-[80px] text-center'>
                {isSeller &&
                    <>
                        <li className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="m-1">
                                <span className='font-bold text-2xl'>Dashboard</span>
                                <span className="badge badge-ghost badge-xs bg-green-200 font-sans text-[10px] p-2 ml-3">Seller</span>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/myproducts'>My Products</Link></li>
                                <li><Link to='/addproduct'>Add Products</Link></li>
                            </ul>
                        </li>
                    </>
                }
                {isBuyer &&
                    <>
                        <li className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="m-1">
                                <span className='font-bold text-2xl'>Dashboard</span>
                                <span className="badge badge-ghost badge-xs bg-green-200 font-sans text-[10px] p-2 ml-3">Buyer</span>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/">my Wishlist</Link></li>
                                <li><Link to='/'>My Bookings</Link></li>
                            </ul>
                        </li>
                    </>
                }
                {isAdmin &&
                    <>
                        <li className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="m-1">
                                <span className='font-bold text-2xl'>Dashboard</span>
                                <span className="badge badge-ghost badge-xs bg-green-200 font-sans text-[10px] p-2 ml-3">Admin</span>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>All Seller</Link></li>
                                <li><Link to='/'>All Buyer</Link></li>
                            </ul>
                        </li>
                    </>
                }
            </nav>
            <div className='text-2xl text-center'>this is dashboard</div>
        </div>
    );





};

export default Dashboard;