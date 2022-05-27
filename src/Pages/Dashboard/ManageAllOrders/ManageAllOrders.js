import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import ManageSingleRow from './ManageSingleRow/ManageSingleRow';

const ManageAllOrders = () => {
    const { data, isLoading } = useQuery('allOrder', async () => await axios.get(`http://localhost:5000/order`));
    const allOrders = data?.data;
    console.log(allOrders)

    return (
        <div className='p-5'>
            <PageTitle title={'Manage All Orders'} />
            {
                isLoading ? <div className="h-screen flex items-center justify-center"><LoadingRipple /> </div> : <div className="overflow-x-auto lg:w-[92%] mx-auto shadow-md"> {
                    allOrders?.length ? <div class="overflow-x-auto">
                        <table class="table w-full">

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
                                    allOrders?.map((order, index) =>  <ManageSingleRow index={index} order={order}/>)
                                }
                            </tbody>
                        </table>
                    </div> : <div></div>
                }
                </div>
            }
        </div>
    );
};

export default ManageAllOrders;