import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import NoData from '../../../Components/NoData/NoData';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import ManageSingleProduct from './ManageSingleProduct/ManageSingleProduct';

const ManageProducts = () => {
    const { data, isLoading } = useQuery('products', async () => await axios.get('http://localhost:5000/product'));
    const products = data?.data.data;

    return (
        <div className='p-5'>
            <PageTitle title={'Manage Products'} />
            {
                isLoading ? <div className="h-screen flex items-center justify-center"><LoadingRipple /> </div> : <div className="overflow-x-auto lg:w-[92%] mx-auto shadow-md">
                    {
                        products?.length ? <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product Info</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products?.map((product, index) => <ManageSingleProduct index={index} product={product} key={product._id} />)
                                }
                            </tbody>
                        </table> : <div className='h-[90vh] flex items-center justify-center'><NoData /></div>
                    }
                </div>
            }
        </div>
    );
};

export default ManageProducts;