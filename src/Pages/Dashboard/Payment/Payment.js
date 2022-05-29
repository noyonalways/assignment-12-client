import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axiosPrivate from '../../../Api/AxiosPrivate';
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4QJ3ASQI9IbbxJDEgAGwwQc6h9bKggxgyRgLXGuI5v8Zrrcrd4sJUM3lMK1M9BUjoTK9qCPKamTpiOMvyhfPk300Dc4IqF6y');

const Payment = () => {
    const { id } = useParams();
    const { data: result, isLoading } = useQuery(['mySingleOrder', id], async () => await axiosPrivate.get(`https://glacial-temple-86041.herokuapp.com/myOrder/${id}`));
    const product = result?.data;

    if (isLoading) {
        return <LoadingRipple />
    }

    return (
        <div className='mx-auto p-5 space-y-5'>
            <div className="card w-96 md:w-[600px] bg-base-100 shadow-xl">
                <div className="p-8 flex justify-between">
                    <div>
                        <h2 className="card-title text-2xl">Pay for {product?.productName}</h2>
                        <p><span className='font-semibold'>Product quantity:</span> {product?.productQuantity}</p>
                        <p><span className='font-semibold'>Total cost:</span> ${product?.totalCost}</p>
                    </div>
                    <img className='w-32 ' src={product?.productImg} alt="" />
                </div>
            </div>
            <div className="card w-96 md:w-[600px] bg-base-100 shadow-xl">
                <div className="p-8 ">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={result?.data} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;