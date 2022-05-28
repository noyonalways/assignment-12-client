import { useState } from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import LoadingRipple from '../../../../Components/LoadingRipple/LoadingRipple';
import auth from '../../../../Firebase/Firebase.init';


const EditProfile = () => {
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [img, setImg] = useState('');


    const handleUpdateProfile = (event) => {
        event.preventDefault();
        (async () => {
            if (address && phone && name && img) {
                await updateProfile({
                    displayName: name,
                    photoURL: img,
                    other: {phoneNumber: phone,
                    address: address,}

                });
            }
        })();
    }

    if (updating) {
        return <div className='flex h-[80vh] items-center justify-center'><LoadingRipple/></div>
    }

    if (error) {
        console.log(error);
    }

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
                            <input onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder='Name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input onChange={(e) => setAddress(e.target.value)} type="text" name='address' placeholder='Address' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input onChange={(e) => setPhone(e.target.value)} type="text" name='phone' placeholder='Phone' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input onChange={(e) => setImg(e.target.value)} type="text" name='image' placeholder='ImageUrl' className="input input-bordered" />
                        </div>
                        <button className="btn btn-secondary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;