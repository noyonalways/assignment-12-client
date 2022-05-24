import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import ProductCard from './ProductCard/ProductCard';

const ProductSection = () => {
    const { data, isLoading } = useQuery('products', async () => await axios.get('http://localhost:5000/product'));
    const products = data?.data.data;


    return (
        <section className='py-5'>
            <div className='text-center py-3 mb-10'>
                <p className='text-lg'>Parts</p>
                <h2 className="text-3xl font-bold">Choose your essential parts</h2>
            </div>
            <div className="container mx-auto lg:px-2">
                {
                    isLoading ? <div className="py-10"><LoadingRipple /></div> : <div className="grid lg:grid-cols-3 gap-8">
                        {
                            products.map(product => <ProductCard />)
                        }
                    </div>
                }
            </div>
        </section>
    );
};

export default ProductSection;