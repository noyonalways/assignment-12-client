import React, { useState } from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../Firebase/Firebase.init';


const EditProfile = () => {
    const [updateProfile, updating, error] = useUpdateProfile(auth);




    const handleUpdateProfile = async (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const address = event.target.address.value;
        const phoneNumber = event.target.phone.value;
        const photoURL = event.target.image.value;
        if (displayName || address || phoneNumber || photoURL) {
        await updateProfile({ displayName, photoURL, address, phoneNumber });
        }

    };

    return (
        <div className="p-5">
            <div className="w-full lg:w-[800px] xl:w-[880px] h-auto  rounded-xl shadow-lg mx-auto ">
                <div className="card flex-shrink-0 w-full bg-base-100">
                    <form onSubmit={handleUpdateProfile} className="card-body">
                        <h3 className="text-2xl font-semibold">Update Profile</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder='Name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name='address' placeholder='Address' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" name='phone' placeholder='Phone' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name='image' placeholder='Phone' className="input input-bordered" />
                        </div>
                        <button className="btn btn-secondary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;