import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import SocilalLogin from '../../Shared/SocialLogin/SocilalLogin';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
        reset();
    };

    if (user) {
        console.log(user);
    }

    return (
        <section>
            <div className="flex min-h-screen overflow-hidden px-4 md:px-0">
                <div className="flex flex-col justify-center flex-1  px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 border md:border-none border-gray-100 rounded shadow lg:shadow-none">
                    <div className="w-full max-w-xl mx-auto lg:w-96 ">
                        <div>
                            <a href="./index.html" className="text-blue-600 text-medium">Tech Parts</a>
                            <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">Login</h2>
                        </div>

                        <div className="mt-8">
                            <div className="mt-6">
                                <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-neutral-600"> Email address </label>
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
                                                id="email" name="email" type="email" autoComplete="email" required="" placeholder="Your Email" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                            {errors.email?.type === 'required' && <small className='text-red-400 mt-1'>{errors.email.message}</small>}
                                            {errors.email?.type === 'pattern' && <small className='text-red-400 mt-1'>{errors.email.message}</small>}
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="password" className="flex justify-between text-sm font-medium text-neutral-600">
                                            <span>Password</span>
                                            <button type='button' className="font-medium text-blue-600 hover:text-blue-500">Forgot your password? </button>
                                        </label>
                                        <div className="flex relative">
                                            <div className='w-full'>
                                                <input  {...register("password", {
                                                    required: {
                                                        value: true,
                                                        message: "Password is required"
                                                    },
                                                    minLength: {
                                                        value: 6,
                                                        message: "Password be 6 character or longer"
                                                    }
                                                })}
                                                    id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required="" placeholder="Your Password" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                                {errors.password?.type === 'required' && <small className='text-red-400 mt-1'>{errors.password.message}</small>}
                                                {errors.password?.type === 'minLength' && <small className='text-red-400 mt-1'>{errors.password.message}</small>}
                                            </div>
                                            <span className='absolute right-2 translate-y-1/2 top-2' onClick={() => setShowPassword(!showPassword)}>
                                                {
                                                    showPassword ? <AiOutlineEye className=' text-lg text-gray-400' /> : <AiOutlineEyeInvisible className=' text-lg text-gray-400' />
                                                }
                                            </span>
                                        </div>
                                    </div>


                                    <div>
                                        <button type="submit" className="btn bnt-primary w-full">Sign in</button>
                                    </div>
                                    <div className='text-center'>
                                        <p>Don't have an account yet? <Link className='text-blue-600 hover:text-blue-400' to='/signup' >SignUp</Link></p>
                                    </div>
                                </form>
                                <SocilalLogin />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
                    <img className="absolute inset-0 object-cover w-full h-full" src="https://i.ibb.co/hLBkRYP/login-bg-min.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Login;