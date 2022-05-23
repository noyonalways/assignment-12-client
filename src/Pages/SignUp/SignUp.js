import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import SocilalLogin from '../../Shared/SocialLogin/SocilalLogin';
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { toast } from 'react-toastify';
import LoadingRipple from '../../Components/LoadingRipple/LoadingRipple';

const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [showPassword, setShowPassword] = useState(false);
    const [terms, setTerms] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if(user){
            toast.success('Successfully SignUp', { toastId: 'signUp' });
            navigate(from, { replace: true });
        }
    },[user, from, navigate]);


    const onSubmit = async data => {
        if (terms === false) {
            toast.error("Please accept terms.", { toastId: "termsId" });

        }
        if (terms) {
            await createUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName: data.name });

        }
        reset();
    };


    return (
        <section>
            <div className="flex flex-col justify-center min-h-screen py-10 sm:px-6 lg:px-8  ">
                <div className='border sm:mx-auto sm:w-full sm:max-w-md border-none lg:border-gray-50 rounded lg:shadow-md'>
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">Sign Up</h2>
                    </div>

                    {
                        loading || updating ? <LoadingRipple /> : <div className="mt-8 ">
                            <div className="px-4 py-8 sm:px-10">
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#" method="POST">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
                                            <div className="mt-1">
                                                <input {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: "Name is required"
                                                    }
                                                })}
                                                    placeholder='Your Name' id="name" name="name" type="text" autoComplete="email" required="" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                                {errors.name?.type === 'required' && <small className='text-red-400 mt-1'>{errors.name.message}</small>}
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email address </label>
                                            <div className="mt-1">
                                                <input {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message: "Emaild is required"
                                                    },

                                                    pattern: {
                                                        value: /\S+@\S+\.\S+/,
                                                        message: "Provide a valid email"
                                                    }
                                                })}
                                                    placeholder='Your Email' id="email" name="email" type="email" autoComplete="email" required="" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                                {errors.email?.type === 'required' && <small className='text-red-400 mt-1'>{errors.email.message}</small>}
                                                {errors.email?.type === 'pattern' && <small className='text-red-400 mt-1'>{errors.email.message}</small>}
                                            </div>
                                        </div>

                                        <div className=''>
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password </label>
                                            <div className="mt-1 flex relative">
                                                <div className='w-full'>
                                                    <input {...register("password", {
                                                        required: {
                                                            value: true,
                                                            message: "Password is required"
                                                        },
                                                        minLength: {
                                                            value: 6,
                                                            message: "Password be 6 character or longer"
                                                        }
                                                    })}
                                                        placeholder='Your Password' id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required="" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                                    {errors.password?.type === 'required' && <small className='text-red-400 mt-1'>{errors.password.message}</small>}
                                                    {errors.password?.type === 'minLength' && <small className='text-red-400 mt-1'>{errors.password.message}</small>}
                                                </div>
                                                <span className='absolute right-2 translate-y-1/2 top-2 text-gray-400 text-xl' onClick={() => setShowPassword(!showPassword)}>
                                                    {
                                                        showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input onChange={() => setTerms(!terms)} id="terms" name="terms" type="checkbox" className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black" />
                                                <label htmlFor="terms" className={`block ml-2 text-sm  ${terms ? 'text-neutral-600' : 'text-red-500'}`}> Terms and conditions </label>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-primary w-full">Sign Up</button>
                                        </div>
                                    </form>
                                    {
                                        error && <p className="bg-red-100 mt-2 p-2 text-sm text-center text-red-500 rounded">{error.message.includes('auth/email-already-in-use') ? "User already exist" : error.message}</p>
                                    }
                                    <div className='text-center mt-2'>
                                        <p>Already have an account?
                                            <Link className='text-blue-600 hover:text-blue-400' to='/login' >Login</Link>
                                        </p>
                                    </div>
                                    <SocilalLogin />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default SignUp;