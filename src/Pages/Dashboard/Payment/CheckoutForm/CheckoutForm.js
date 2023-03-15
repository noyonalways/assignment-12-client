import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import axiosPrivate from '../../../../Api/AxiosPrivate';

const CheckoutForm = ({ product }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const price = product?.totalCost;
    const { name, email, _id } = product;
    // console.log(product);

    useEffect(() => {
        (async () => {

            const { data } = await axiosPrivate.post(`/create-payment-intent`, { price });
            setClientSecret(data?.clientSecret);

        })();

    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '');
        setSuccess('');


        // consfirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);

        } else {

            setCardError('');
            setTransactionId(paymentIntent?.id)
            setSuccess('Congrats! Your payment is completed');

            const payment = {
                transactionId: paymentIntent?.id,
                email: email,
                productId: _id,
                status: 'pending'
            }
            const { data } = await axiosPrivate.patch(`/order/${_id}`, payment);
            console.log(data);


        }


    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-secondary btn-sm mt-4 text-white' type="submit" disabled={!stripe || !clientSecret || success}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500 mt-2'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-green-500 mt-2 font-semibold'>{success}</p>
                    <p className='text-green-500 '>Your Transaction id {transactionId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;