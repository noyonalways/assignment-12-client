import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../Api/AxiosPrivate';
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import NoData from '../../../Components/NoData/NoData';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import auth from '../../../Firebase/Firebase.init';
import ManageModal from './ManageSingleProduct/ManageModal/ManageModal';
import ManageSingleProduct from './ManageSingleProduct/ManageSingleProduct';

const ManageProducts = () => {
    const navigate = useNavigate();
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { data: result, isLoading, refetch } = useQuery('products', async () => {
        try {
            return await axiosPrivate.get('/product')
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
        <div data-aos="fade-up" data-aos-duration="1000" className='p-5'>
            <PageTitle title={'Manage Products'} />
            <>
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
                                        products?.map((product, index) => <ManageSingleProduct setDeleteProduct={setDeleteProduct} index={index} product={product} key={product._id} />)
                                    }
                                </tbody>
                            </table> : <div className='h-[90vh] flex items-center justify-center'><NoData /></div>
                        }
                    </div>
                }
            </>
            {
                deleteProduct && <ManageModal setDeleteProduct={setDeleteProduct} deleteProduct={deleteProduct} refetch={refetch}  />
            }
        </div>
    );
};

export default ManageProducts;