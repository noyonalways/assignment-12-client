import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../Api/AxiosPrivate';
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import NoData from '../../../Components/NoData/NoData';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import auth from '../../../Firebase/Firebase.init';
import ManageSingleRow from './ManageSingleRow/ManageSingleRow';

const ManageAllOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const { data: result, isLoading } = useQuery('allOrder', async () => {
        try {
            return await axiosPrivate.get(`http://localhost:5000/order?email=${user.email}`)
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
        <div className='p-5'>
            <PageTitle title={'Manage All Orders'} />
            {
                isLoading ? <div className="h-screen flex items-center justify-center"><LoadingRipple /> </div> : <div className="overflow-x-auto lg:w-[92%] mx-auto shadow-md"> {
                    allOrders?.length ? <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Prduct</th>
                                    <th>User</th>
                                    <th>Payment status</th>
                                    <th>Shipping status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allOrders?.map((order, index) => <ManageSingleRow key={order._id} index={index} order={order} />)
                                }
                            </tbody>
                        </table>
                    </div> : <div className='h-[90vh] flex items-center justify-center'><NoData /></div>
                }
                </div>
            }
        </div>
    );
};

export default ManageAllOrders;