import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/Authprovider';
import './Navbar.css'
import logo from '../../../../book-logo-dark.svg'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const menuItem = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        {user ?
            <li onClick={() => { logOut() }}><Link>Sign Out</Link></li>
            : <>
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
            </>}
    </React.Fragment>

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
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItem}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;