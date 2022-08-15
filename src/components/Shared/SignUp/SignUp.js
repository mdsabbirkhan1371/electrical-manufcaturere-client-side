import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <div className='container w-50 p-5'>

            <h2 className='text-info'>Please Sign_Up Here!</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label className='fs-4' htmlFor="name">Name</label>
                <br />
                <input className='w-75 p-2 rounded-2' placeholder='Enter Your Name' {...register("name", { required: "Name is Required" })} />
                <p className='text-danger'>{errors.name?.message}</p>
                <label className='fs-4' htmlFor="email">Email</label>
                <br />
                <input className='w-75 p-2 rounded-2' placeholder='Enter Your Email' {...register("email", { required: "Email Address is Required" })} />
                <p className='text-danger'>{errors.email?.message}</p>

                <label className='fs-4' htmlFor="password">Password</label>
                <br />
                <input className='w-75 p-2 rounded-2' placeholder='Enter Your Password' {...register("password", { required: "Password is Required" })} />
                <p className='text-danger'>{errors.password?.message}</p>

                <p>Already have an Account? <Link to='/signin'>Please Sign In here</Link></p>
                <input className='bg-info px-3 py-2 rounded-2' type="submit" value='Sign Up' />
            </form>
        </div>
    );
};

export default SignUp;