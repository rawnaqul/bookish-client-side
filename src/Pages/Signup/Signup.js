import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/Authprovider';
import toast from 'react-hot-toast';

const Signup = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { createUser, upadteUserInfo } = useContext(AuthContext);

    const handleSignUp = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                toast.success('kaam hoise')
                const userInfo = {
                    displayName: data.name,
                    photoURL: data.photoUrl
                }
                console.log(userInfo);
                upadteUserInfo(userInfo)
                    .then(() => { })
                    .catch(err => { console.error(err) })

            })
            .catch(error => console.error(error));
    }

    return (
        <div className='p-3'>
            <div className='my-24 text-2xl text-center container mx-auto shadow-xl w-full lg:w-1/2 p-6 rounded-lg bg-cyan-600/[.1]'>
                <h1 className='font-semibold text-2xl text-slate-500'>Sign Up Now!</h1>
                <br />
                <form onSubmit={handleSubmit(handleSignUp)} className='grid lg:w-1/2 mx-auto'>

                    <input {...register("name", { required: "Must be a valid name" })} placeholder="Name" type="text" className='input input-bordered w-full' />
                    <br />
                    <input {...register("photoUrl", { required: "Must be a valid link" })} placeholder="Photo link" type="text" className='input input-bordered w-full' />
                    <br />
                    <input {...register("email", { required: "Must be a valid email" })} placeholder="Email" type="email" className='input input-bordered w-full' />
                    {errors.email && <p className='text-sm text-red-500 text-left mt-2 ml-1' role="alert">{errors.email?.message}</p>}
                    <br />
                    <input {...register("password", { required: "Set a Password", minLength: { value: 6, message: "Minimum 6 charachter required" } })} placeholder="Password" type="password" className='input input-bordered w-full' />
                    {errors.password && <p className='text-sm text-red-500 text-left mt-2 ml-1' role="alert">{errors.password?.message}</p>}
                    {/* <Link className='text-sm text-orange-400 my-2 text-left'>Forgot Password?</Link> */}
                    <br />
                    <button className='btn bg-slate-600/[.9]'>Sign Up</button>
                    <br />
                    <p className='text-sm'> Already have an account? <span className='text-blue-400'><Link to='/login'>Log In here!</Link></span> </p>
                    <div className='divider'>Or</div>
                    <button className='btn btn-outline'>Sign Up with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;