import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../Api/AxiosPrivate';
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import NoData from '../../../Components/NoData/NoData';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import auth from '../../../Firebase/Firebase.init';
import ManageSingleProduct from './ManageSingleProduct/ManageSingleProduct';

const ManageProducts = () => {
    const navigate = useNavigate();
    const { data: result, isLoading } = useQuery('products', async () => {
        try {
            return await axiosPrivate.get('http://localhost:5000/product')
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth);
                navigate('/login');
                localStorage.removeItem('accessToken');
            }
        }
    });
    const products = result?.data?.data;

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