import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../Api/AxiosPrivate';
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import NoData from '../../../Components/NoData/NoData';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import auth from '../../../Firebase/Firebase.init';
import DeleteConfirmModal from './ManageSingleRow/DeleteConfirmModal/DeleteConfirmModal';
import ManageSingleRow from './ManageSingleRow/ManageSingleRow';

const ManageAllOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [deleteOrder, setDeleteOrder] = useState(null);

    const { data: result, isLoading, refetch } = useQuery('allOrder', async () => {
        try {
            return await axiosPrivate.get(`https://glacial-temple-86041.herokuapp.com/order?email=${user.email}`)
        } catch (error) {
            console.log(error);
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth);
                navigate('/login');
                localStorage.removeItem('accessToken');
            }
        }
    });
    const allOrders = result?.data;

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='p-5'>
            <PageTitle title={'Manage All Orders'} />
            <>
                {
                    isLoading ? <div className="h-screen flex items-center justify-center"><LoadingRipple /> </div> : <div className="overflow-x-auto lg:w-[92%] mx-auto shadow-md"> {
                        allOrders?.length ? <div className="overflow-x-auto">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Prduct</th>
                                        <th>User</th>
                                        <th>Staus</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allOrders?.map((order, index) => <ManageSingleRow refetch={refetch} setDeleteOrder={setDeleteOrder} key={order._id} index={index} order={order} />)
                                    }
                                </tbody>
                            </table>
                        </div> : <div className='h-[90vh] flex items-center justify-center'><NoData /></div>
                    }
                    </div>

                }
            </>
            {
                deleteOrder && <DeleteConfirmModal refetch={refetch} deleteOrder={deleteOrder}  setDeleteOrder={setDeleteOrder}/>
            }
        </div>
    );
};

export default ManageAllOrders;