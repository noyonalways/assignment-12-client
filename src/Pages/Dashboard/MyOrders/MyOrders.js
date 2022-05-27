import React from 'react';
import { useQuery } from 'react-query';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import auth from '../../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import NoData from '../../../Components/NoData/NoData';
import SingleRow from './SingleRow/SingleRow';
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../Api/AxiosPrivate';


const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const { data: result, isLoading } = useQuery('myOrders', async () => {
        try {
            return await axiosPrivate.get(`http://localhost:5000/myOrder?email=${user.email}`);

        } catch (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth);
                navigate('/login');
                localStorage.removeItem('accessToken');
            }
        }
    });
    const myOrders = result?.data;






    return (
        <div className='p-5'>
            <PageTitle title={'My orders'} />
            {
                isLoading ? <div className="h-screen flex items-center justify-center"><LoadingRipple /> </div> : <div className="overflow-x-auto lg:w-[92%] mx-auto shadow-md">
                    {
                        myOrders?.length ? <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product Info</th>
                                    <th>Product Quantity</th>
                                    <th>USer Info</th>
                                    <th>Order Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrders?.map((order, index) => <SingleRow index={index} order={order} key={order._id} />)
                                }
                            </tbody>
                        </table> : <div className='h-[90vh] flex items-center justify-center'><NoData /></div>
                    }
                </div>
            }
        </div>
    );
};

export default MyOrders;