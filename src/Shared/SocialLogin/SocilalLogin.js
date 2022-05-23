import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingRipple from '../../Components/LoadingRipple/LoadingRipple';

const SocilalLogin = () => {
    const [signInWithGoogle, userByGoogle, loadingByGoogle, errorByGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userByFb, loadingByFb, errorByFb] = useSignInWithFacebook(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (userByFb || userByGoogle) {
        console.log(userByFb || userByGoogle);
    }

    if (errorByGoogle || errorByFb) {
        if (errorByGoogle?.message.includes('auth/popup-closed-by-user') || errorByFb?.message.includes('auth/popup-closed-by-user')) {
            toast.error('Popup close by you', { toastId: 'popup' })
        } else {
            toast.error(errorByFb?.message || errorByGoogle?.message, { toastId: 'popup2' });
        }

    }

    return (
        <div>
            {
                loadingByGoogle || loadingByFb ? <LoadingRipple /> : <div>
                    <div className="divider">Or</div>
                    <div className="space-y-3">
                        <button onClick={() => signInWithGoogle()} className='hover:bg-gray-100 duration-200 shadow space-x-2 rounded-md flex items-center p-2 w-full justify-center'>
                            <FcGoogle className='text-3xl' />
                            <span>Continue with Google</span>
                        </button>
                        <button onClick={() => signInWithFacebook()} className='hover:bg-gray-100 duration-200 shadow space-x-2 rounded-md flex items-center p-2 w-full justify-center'>
                            <FaFacebook className='text-3xl text-[#4267B2]' />
                            <span>Continue with Facebook</span>
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default SocilalLogin;