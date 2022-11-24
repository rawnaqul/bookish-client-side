import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/Authprovider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();


    const { signIn } = useContext(AuthContext);

    const handleLogIn = (data) => {
        // console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
            .catch(error => console.error(error));
    }


    return (
        <div className='p-3'>
            <div className='my-24 text-2xl text-center container mx-auto shadow-xl w-full lg:w-1/2 p-6 rounded-lg bg-cyan-600/[.1] '>
                <h1 className='font-semibold text-2xl text-slate-500'>Login Now!</h1>
                <br />
                <form onSubmit={handleSubmit(handleLogIn)} className='grid w-full lg:w-1/2 mx-auto'>

                    <input {...register("email", { required: "Must be a valid email" })} placeholder="Name" type="email" className='input input-bordered w-full' />
                    {errors.email && <p className='text-sm text-red-500 text-left mt-2 ml-1' role="alert">{errors.email?.message}</p>}
                    <br />
                    <input {...register("password", { required: "Set a Password", minLength: { value: 6, message: "Minimum 6 charachter required" } })} placeholder="Password" type="password" className='input input-bordered w-full' />
                    {errors.password && <p className='text-sm text-red-500 text-left mt-2 ml-1' role="alert">{errors.password?.message}</p>}
                    <Link className='text-sm text-orange-400 my-2 text-left'>Forgot Password?</Link>
                    <br />
                    <button className='btn bg-slate-600/[.9]'>Log In</button>
                    <br />
                    <p className='text-sm'> New to doctors portal? <span className='text-blue-400'><Link to='/signup'>Creat New Account Here.</Link></span> </p>
                    <div className='divider'>Or</div>
                    <button className='btn btn-outline'>Continue with Google</button>
                </form>
                <br />
            </div>
        </div>
    );
};

export default Login;