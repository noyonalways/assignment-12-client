import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import auth from '../../../Firebase/Firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async (review) => {
        const newReview = {
            displayName: user.displayName,
            photoURL: user.photoURL,
            comment: review.comment,
            rating: parseFloat(review.rating),
        }


        const { data } = await axios.post(`/review`, newReview);
        console.log(data)
        reset();
    }


    return (
        <section data-aos="fade-up" data-aos-duration="1000" className='w-full'>
            <PageTitle title={'Add Review'} />
            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-semibold mt-10 mb-6">Add Your review</h2>
                <div className='flex items-start justify-center  w-full px-5'>
                    <div className=" w-full lg:w-[480px] h-auto  rounded-xl shadow-lg">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        }
                                    })} type="text" readOnly value={user.displayName} className="input input-bordered text-lg font-semibold disabled:bg-gray-50" />
                                {errors.name?.type === 'required' && <small className='text-red-400 mt-1'>{errors.name.message}</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input
                                    {...register("rating", {
                                        required: {
                                            value: true,
                                            message: "Rating is required"
                                        }
                                    })}
                                    min="1" max="5" placeholder='Your ratings' className='text-lg input input-bordered' type="number" />
                                {errors.rating?.type === 'required' && <small className='text-red-400 mt-1'>{errors.rating.message}</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <textarea {...register("comment", {
                                    required: {
                                        value: true,
                                        message: "Comment is required"
                                    }
                                })} placeholder='Your comment...' className='textarea textarea-bordered text-lg resize-none' cols="30" rows="5"></textarea>
                                {errors.comment?.type === 'required' && <small className='text-red-400 mt-1'>{errors.comment.message}</small>}
                            </div>
                            <button type='submit' className="btn btn-secondary text-white inline-block w-48 mx-auto">Add Review</button>


                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddReview;