import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4QJ3ASQI9IbbxJDEgAGwwQc6h9bKggxgyRgLXGuI5v8Zrrcrd4sJUM3lMK1M9BUjoTK9qCPKamTpiOMvyhfPk300Dc4IqF6y');

const Payment = () => {
    const { id } = useParams();
    const { data: result, isLoading } = useQuery(['mySingleOrder', id], async () => await axios.get(`http://localhost:5000/myOrder/${id}`));
    const product = result?.data;
    console.log(product);

    return (
        <div className='mx-auto p-5 space-y-5'>
            <div class="card w-96 md:w-[600px] bg-base-100 shadow-xl">
                <div class="p-8 flex justify-between">
                    <div>
                        <h2 class="card-title text-2xl">Pay for {product?.productName}</h2>
                        <p><span className='font-semibold'>Product quantity:</span> {product.productQuantity}</p>
                        <p><span className='font-semibold'>Total cost:</span> {product.totalCost}</p>
                    </div>
                    <img className='w-32 ' src={product?.productImg} alt="" />
                </div>
            </div>
            <div class="card w-96 md:w-[600px] bg-base-100 shadow-xl">
                <div class="p-8 ">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;