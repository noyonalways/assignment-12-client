
import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../Api/AxiosPrivate';
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import NoData from '../../../Components/NoData/NoData';
import auth from '../../../Firebase/Firebase.init';
import ProductCard from './ProductCard/ProductCard';

const ProductSection = () => {
    const navigate = useNavigate();
    const { data: result, isLoading } = useQuery('products', async () => {
        try {
            return await axiosPrivate.get('https://glacial-temple-86041.herokuapp.com/product')
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth);
                navigate('/login');
                localStorage.removeItem('accessToken');
            }
        }
    })

    const products = result?.data?.data;


    return (
        <section id='products' className='py-5'>
            <div className='text-center py-3 mb-10'>
                <p className='text-lg'>Parts</p>
                <h2 className="text-3xl font-bold">Choose your essential parts</h2>
            </div>
            <div className="container mx-auto px-6 lg:px-2">
                {
                    isLoading ? <div className="flex items-center justify-center h-screen"><LoadingRipple /> </div> : <>
                        {products?.length ? <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>{products?.map(product => <ProductCard key={product._id} product={product} />)}</div> : <div className='h-screen flex items-center justify-center'><NoData /></div>}
                    </>
                }
            </div>
        </section>
    );
};

export default ProductSection;