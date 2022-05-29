import React, { useState } from 'react';
import { useQuery } from 'react-query';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import auth from '../../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import NoData from '../../../Components/NoData/NoData';
import SingleRow from './SingleRow/SingleRow';
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import { signOut } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../Api/AxiosPrivate';
import DeleteConfirmModal from '../ManageAllOrders/ManageSingleRow/DeleteConfirmModal/DeleteConfirmModal';


const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [deleteOrder, setDeleteOrder] = useState(null);

    const { data: result, isLoading, refetch } = useQuery('myOrders', async () => {
        try {
            return await axiosPrivate.get(`https://glacial-temple-86041.herokuapp.com/myOrder?email=${user.email}`);

        } catch (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                if (pathname.includes('!login')) {
                    navigate('/login');
                }
            }
        }
    });
    const myOrders = result?.data;






    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='p-5'>
            <PageTitle title={'My orders'} />
            <>
                {
                    isLoading ? <div className="h-screen flex items-center justify-center"><LoadingRipple /> </div> : <div className="overflow-x-auto lg:w-[92%] mx-auto shadow-md" >
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
                                        myOrders?.map((order, index) => <SingleRow setDeleteOrder={setDeleteOrder} index={index} order={order} key={order._id} />)
                                    }
                                </tbody>
                            </table> : <div className='h-[90vh] flex items-center justify-center'><NoData /></div>
                        }
                    </div>
                }
                {
                    deleteOrder && <DeleteConfirmModal refetch={refetch} deleteOrder={deleteOrder}  setDeleteOrder={setDeleteOrder}/>
                }
            </>
        </div>
    );
};

export default MyOrders;