import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignIn.css'
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import { useNavigate, useLocation } from "react-router-dom";
import useToken from '../../../hooks/useToken';


const SignIn = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user)

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            toast.success('User Sign In Successful')
        }
    }, [token, from, navigate, user]);

    if (error) {
        return (
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Loading></Loading>
    }



    const onSubmit = (data) => {
        // console.log(data)
        const { email, password } = data;
        signInWithEmailAndPassword(email, password)
    };
    return (

        <div className='container w-50 p-5'>

            <h2 className='text-info'>Please_Sign In Here!</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label className='fs-4' htmlFor="email">Email</label>
                <br />
                <input className='w-75 p-2 rounded-2 text-dark' placeholder='Enter Your Email' {...register("email", { required: "Email Address is Required" })} />
                <p className='text-danger'>{errors.email?.message}</p>

                <label className='fs-4' htmlFor="password">Password</label>
                <br />
                <input className='w-75 p-2 rounded-2 text-dark' placeholder='Enter Your Password' {...register("password", { required: "Password is Required" })} />
                <p className='text-danger'>{errors.password?.message}</p>

                <p>Don't have an Account? <Link to='/signup'>Create New Account</Link></p>
                <input className='bg-info px-3 py-2 rounded-2' type="submit" value='Sign In' />
            </form>
            <SocialLogin></SocialLogin>
        </div>


    );
};

export default SignIn;