import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/Authprovider';
import './Navbar.css'
import logo from '../../../../book-logo-dark.svg';
import altImage from '../../../../no-image.png';
import toast from 'react-hot-toast';
// import { useUserVerify } from '../../../../useVerification/useUserVerify';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    // const [isSeller, isBuyer, isAdmin, isUserLoading] = useUserVerify(user?.email);





    const logOutDone = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Logged Out')
                localStorage.removeItem('accessToken')
            })
    }

    const menuItem = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        {user ?
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li onClick={logOutDone}><Link>Sign Out</Link></li></>
            : <>
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
            </>}
        {/* {isSeller &&
            <>
                <li className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="m-1">Dashboard
                        <span className="badge badge-ghost badge-xs bg-green-200 font-sans text-[10px] p-3">Seller</span>
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
                    <label tabIndex={0} className="m-1">Dashboard
                        <span className="badge badge-ghost badge-xs bg-green-200 font-sans text-[10px] p-3">Buyer</span>
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
                    <label tabIndex={0} className="m-1">Dashboard<span className="badge badge-ghost badge-xs bg-green-200 font-sans text-[10px] p-3">Admin</span>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>All Seller</Link></li>
                        <li><Link to='/'>All Buyer</Link></li>
                    </ul>
                </li>
            </>
        } */}
    </React.Fragment>
    // console.log(user.photoURL);

    return (

        <div className='' >
            <div className='nav-custom shadow fixed top-0 left-0 right-0 z-50'>
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content  p-2 shadow bg-base-100 rounded-box w-52 mt-12">
                                {menuItem}
                            </ul>
                        </div>
                        <Link to='/' className="uppercase text-2xl font-semibold rounded-md  p-2 flex">
                            <img src={logo} alt=''></img>
                            <h2 className='text-3xl font-semibold font-serif mx-2'>Bookish</h2>
                        </Link>
                    </div>
                    <div className="navbar-end hidden lg:flex ">
                        <ul className="menu menu-horizontal p-0">
                            {menuItem}
                        </ul>
                        <div className="avatar">
                            <div className="w-12 mask mask-squircle">
                                <img src={user ? user.photoURL : altImage} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;