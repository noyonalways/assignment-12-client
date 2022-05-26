import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import auth from '../../../Firebase/Firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    return (
        <section className='w-full'>
            <PageTitle title={'Add Review'} />
            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-semibold mt-10 mb-6">Add Your review</h2>
                <div className='flex items-start justify-center  w-full px-5'>
                    <div className=" w-full lg:w-[480px] h-auto  rounded-xl shadow-lg">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" disabled value={user.displayName} className="input input-bordered text-lg font-semibold disabled:bg-gray-50" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input min="1" max="5" placeholder='Your ratings' className='text-lg input input-bordered' type="number" name="" id="" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <textarea placeholder='Your comment...' className='textarea textarea-bordered text-lg resize-none' name="" id="" cols="30" rows="5"></textarea>
                            </div>
                            <button className="btn btn-secondary text-white inline-block w-48 mx-auto">Add Review</button>


                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddReview;