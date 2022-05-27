import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import auth from '../../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import NoData from '../../../Components/NoData/NoData';
import SingleRow from './SingleRow/SingleRow';


const MyOrders = () => {
    const [user] = useAuthState(auth);

    const { data } = useQuery('myOrders', async () => await axios.get(`http://localhost:5000/myOrder?email=${user.email}`));
    const myOrders = data?.data;
    console.log(data);

    return (
        <div>
            <PageTitle title={'My orders'} />
            <div className=" bg-red-200  p-5">
                <div className="overflow-x-auto lg:w-[90%] mx-auto">
                    {
                        myOrders?.length ? <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Product Info</th>
                                    <th>Product Quantity</th>
                                    <th>USer Info</th>
                                    <th>Order Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrders?.map(order => <SingleRow order={order} key={order._id} />)
                                }
                            </tbody>
                        </table> : <div className='h-[85vh] flex items-center justify-center'><NoData/></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;