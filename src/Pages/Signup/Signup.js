import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/Authprovider';
import toast from 'react-hot-toast';
import { success } from 'daisyui/src/colors';

const Signup = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const { createUser, upadteUserInfo } = useContext(AuthContext);

    const handleSignUp = (data) => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                if (result.user) {
                    toast.success('Sign Up Done!')
                }
                const userInfo = {
                    displayName: data.name,
                    photoURL: data.photoUrl
                }
                console.log(userInfo);
                upadteUserInfo(userInfo)
                    .then(() => {
                        storeUser(data.name, data.email, data.userRole)
                    })
                    .catch(err => { console.error(err) })

            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message)
            });
    }

    //SAVE USER DATA IN DATABASE
    const storeUser = (name, email, userRole) => {
        const user = { name, email, userRole, verified: false };

        fetch('https://server-bice-beta.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='p-3'>
            <div className='my-24 text-2xl text-center container mx-auto shadow-xl w-full lg:w-1/2 p-6 rounded-lg bg-cyan-600/[.1]'>
                <h1 className='font-semibold text-2xl text-slate-500 my-5'>Sign Up Now!</h1>

                <form onSubmit={handleSubmit(handleSignUp)} className='grid lg:w-1/2 mx-auto'>

                    <input {...register("name", { required: "Must be a valid name" })} placeholder="Name" type="text" className='input input-bordered w-full my-4' />

                    <input {...register("photoUrl", { required: "Must be a valid link" })} placeholder="Photo link" type="text" className='input input-bordered w-full my-4' />

                    <input {...register("email", { required: "Must be a valid email" })} placeholder="Email" type="email" className='input input-bordered w-full my-4' />
                    {errors.email && <p className='text-sm text-red-500 text-left mt-2 ml-1' role="alert">{errors.email?.message}</p>}

                    <div className='py-3'>
                        <select {...register("userRole", { required: 'This Field is required' })} className="select select-bordered w-full my-4" placeholder='Sign Up as...'>
                            <option value="">Sign Up...</option>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                        {errors.userRole && <p className='text-right text-red-600 my-1 text-xs'>{errors.userRole?.message}</p>}
                    </div>

                    <input {...register("password", { required: "Set a Password", minLength: { value: 6, message: "Minimum 6 charachter required" } })} placeholder="Password" type="password" className='input input-bordered w-full my-4' />
                    {errors.password && <p className='text-sm text-red-500 text-left mt-2 ml-1' role="alert">{errors.password?.message}</p>}
                    {/* <Link className='text-sm text-orange-400 my-2 text-left'>Forgot Password?</Link> */}

                    <p>{signUpError}</p>

                    <button className='btn bg-slate-600/[.9] my-4'>Sign Up</button>

                    <p className='text-sm my-4'> Already have an account? <span className='text-blue-400'><Link to='/login'>Log In now!</Link></span> </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;