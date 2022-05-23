import React from 'react';
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import SocilalLogin from '../../Shared/SocialLogin/SocilalLogin';

const Login = () => {
    return (
        <section>
            <div className="flex min-h-screen overflow-hidden">
                <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="w-full max-w-xl mx-auto lg:w-96">
                        <div>
                            <a href="./index.html" className="text-blue-600 text-medium">Tech Parts</a>
                            <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">Login</h2>
                        </div>

                        <div className="mt-8">
                            <div className="mt-6">
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-neutral-600"> Email address </label>
                                        <div className="mt-1">
                                            <input id="email" name="email" type="email" autoComplete="email" required="" placeholder="Your Email" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="password" className="flex justify-between text-sm font-medium text-neutral-600">
                                            <span>Password</span>
                                            <button type='button' className="font-medium text-blue-600 hover:text-blue-500">Forgot your password? </button>
                                        </label>
                                        <div className="mt-1 relative">
                                            <input id="password" name="password" type="password" autoComplete="current-password" required="" placeholder="Your Password" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                            <span><AiOutlineEye className='absolute bottom-4 right-[0.15rem] text-lg text-gray-400' /></span>
                                        </div>
                                    </div>


                                    <div>
                                        <button type="submit" className="btn bnt-primary w-full">Sign in</button>
                                    </div>
                                    <div className='text-center'>
                                        <p>Don't have an account yet? <Link className='text-blue-600 hover:text-blue-400' to='/signup' >SignUp</Link></p>
                                    </div>
                                </form>
                                <SocilalLogin/>
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