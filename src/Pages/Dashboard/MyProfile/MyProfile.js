
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import auth from '../../../Firebase/Firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <PageTitle title={'My Profile'} />
            <div className="container mx-auto py-4">
                <div className='flex items-start justify-center w-full px-5'>
                    <div className="w-full lg:w-[800px] xl:w-[880px] h-auto  rounded-xl shadow-lg">
                        <div className='flex justify-between py-4 px-8 border-b'>
                            <h2 className="text-2xl font-semibold">My Profile</h2>
                            <button className='text-secondary'>Edit</button>
                        </div>
                        <div className="px-5 py-6 lg:px-8 lg:py-6">
                            <div className="flex flex-col lg:flex-row lg:space-x-6">
                                <div className='space-y-3 text-center'>
                                    {
                                        user.photoURL ? <img className='w-40 rounded-full mx-auto' src={user.photoURL} alt="" /> : <div className="text-8xl bg-primary w-40 h-40 flex items-center justify-center rounded-full text-white font-semibold">{user.email.substring(0, 1).toUpperCase()}</div>
                                    }
                                    <button className="btn-secondary btn text-white mx-auto inline-block">Edit Profile</button>
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <span className="font-semibold">Full name</span>
                                        <p className="text-lg">{user.displayName}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Email Address</span>
                                        <p className="text-lg">{user.email}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Phone</span>
                                        <p className="text-lg">{user?.phoneNumber}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Address</span>
                                        <p className="text-lg"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;