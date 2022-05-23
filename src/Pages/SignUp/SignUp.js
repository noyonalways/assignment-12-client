import React from 'react';
import { Link } from 'react-router-dom';
import SocilalLogin from '../../Shared/SocialLogin/SocilalLogin';

const SignUp = () => {
    return (
        <section>
            <div class="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 class="mt-6 text-3xl font-extrabold text-center text-neutral-600">Sign Up</h2>
                </div>

                <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div class="px-4 py-8 sm:px-10 border border-gray-50 shadow rounded">
                        <div>
                            <form class="space-y-6" action="#" method="POST">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700"> Name </label>
                                    <div class="mt-1">
                                        <input placeholder='Your Name' id="name" name="email" type="email" autocomplete="email" required="" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
                                    <div class="mt-1">
                                        <input placeholder='Your Email' id="email" name="email" type="email" autocomplete="email" required="" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>

                                <div>
                                    <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
                                    <div class="mt-1">
                                        <input placeholder='Your Password' id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>
                                <div>
                                    <label for="confirmPassword" class="block text-sm font-medium text-gray-700"> Confirm Password </label>
                                    <div class="mt-1">
                                        <input placeholder='Confirm Password' id="confirmPassword" name="password" type="password" autocomplete="current-password" required="" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>

                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <input id="terms" name="terms" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                        <label for="terms" class="block ml-2 text-sm text-neutral-600"> Terms and conditions </label>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" class="btn btn-primary w-full">Sign Up</button>
                                </div>

                            </form>
                            <div className='text-center mt-2'>
                                <p>Already have an account?
                                    <Link className='text-blue-600 hover:text-blue-400' to='/login' >Login</Link></p>
                            </div>
                            <SocilalLogin/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;