import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingRipple from '../../Components/LoadingRipple/LoadingRipple';
import auth from '../../Firebase/Firebase.init';
import { format } from 'date-fns';

const ProductDetail = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const { data, isLoading, refetch } = useQuery(['singleProduct', id], async () => await axios.get(`https://glacial-temple-86041.herokuapp.com/product/${id}`));
    const product = data?.data;
    // const { name, img, availableQuantity, price, productDescription, sold, _id } = product;
    const [address, setAddress] = useState({value: '', error: ''});
    const [wantQuantity, setWantQuantity] = useState({value: '', error: ''});
    const [phone, setPhone] = useState({value: '', error: ''});
    const date = new Date();
    const formatedDate = format(date, "PPPPpp");

    const handleQuantity = inputQuantity => {
        if(inputQuantity && parseInt(inputQuantity) > 0){
            setWantQuantity({value: parseInt(inputQuantity), error: ''})
        }
        else if(parseInt(inputQuantity) < 0){
            setWantQuantity({value: '', error: 'Input a positive number'})
        }
        else{
            setWantQuantity({value: '', error: 'Input a quantity'})
        }
    };

    const handleAddress = inputAddress => {
        if(inputAddress){
            setAddress({value: inputAddress, error: ''})
        }else{
            setAddress({value: '', error: 'Input Address'})
        }
    };

    const handlePhone = inputPhone => {
        if(inputPhone){
            setPhone({value: inputPhone, error: ''})
        }else{
            setPhone({value: '', error: 'Input a phone number'})
        }
    };

    const placeOrder =  async (event) => {
        event.preventDefault();
        if(wantQuantity.value === ''){
            setWantQuantity({value: '', error: 'Quantity is required'})
        }

        if(wantQuantity.value > parseInt(product?.availableQuantity) ){
            setWantQuantity({value: '', error: 'Insufficient quantity'})
        }
        
        if(address.value === ''){
            setAddress({value: '', error: 'Address is required'})
        }
        if(phone.value === ''){
            setPhone({value: '', error: 'Phone number is required'})
        }

        if(parseInt(wantQuantity.value) < parseInt(product?.minQunatity)){
            toast.error(`Order at least ${parseInt(product?.minQunatity)}`, {toastId: 'minimum'})
        }

        if(parseInt(wantQuantity.value) >= product?.minQunatity && parseInt(wantQuantity.value) <= parseInt(product?.availableQuantity) && address.value && phone.value){
            

            const newQuantity =  parseInt(product?.availableQuantity) - wantQuantity.value;
            const newSoldQuantity = parseInt(product?.sold) + wantQuantity.value;
            
            const updatedProduct ={
                quantity: newQuantity,
                sold: newSoldQuantity
            }
            const {data: result} = await axios.put(`https://glacial-temple-86041.herokuapp.com/product/${id}`, updatedProduct);
            console.log(result);
            refetch();


            const orderProduct = {
                userEmail: user.email,
                userName: user.displayName,
                userAddress: address.value,
                userPhone: phone.value,
                productName: product?.name,
                productQuantity: wantQuantity.value,
                productId: product?._id,
                productImg: product?.img,
                productPrice: product?.price,
                totalCost: (wantQuantity.value * parseInt(product?.price)).toFixed(2),
                date: formatedDate
            }
            const {data} = await axios.post('https://glacial-temple-86041.herokuapp.com/order', orderProduct);
            if(data.success){
                toast.success('Order placed successfully', {toastId: 'order'})
            }
            event.target.reset();
        
        }
    }

    return (
        <section className='py-5'>
            <div className="container mx-auto lg:px-3">
                {
                    isLoading ? <div className="flex items-center justify-center h-screen"><LoadingRipple /> </div> : <div className="flex items-center lg:items-start  flex-col lg:flex-row justify-between ">
                        <div className='max-w-2xl'>
                            <figure className=' max-w-xs py-2 mx-auto'><img src={product?.img} alt="Shoes" /></figure>
                            <h2 className="text-2xl font-semibold">{product?.name}</h2>
                            <div className="space-y-0">
                                <p className='text-lg font-semibold'>Price: ${product?.price} <small>(Per product)</small></p>
                                <p className='text-lg '><span className="font-semibold">Quantity:</span> {product?.availableQuantity}</p>
                                <p className='text-lg'><span className="font-semibold">Sold:</span> {product?.sold}</p>
                            </div>
                            <p className="text-base text-gray-500 ">{product?.productDescription}</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={placeOrder} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" disabled value={user?.displayName} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" disabled value={user?.email} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span><small>Order minimun <span className='font-semibold'>{product?.minQunatity}</span></small>
                                    </label>
                                    <input  onBlur={(e) => handleQuantity(e.target.value)} type="number" placeholder='Quantity you want' className={`input input-bordered ${wantQuantity.error && 'border-red-500'}`} />
                                    {
                                        wantQuantity.error && <small className="text-red-400">{wantQuantity.error}</small>
                                    }
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input onBlur={(e) => handleAddress(e.target.value)} type="text" placeholder='Address' className={`input input-bordered ${address.error && 'border-red-400'}`} />
                                    {
                                        address.error && <small className="text-red-400">{address.error}</small>
                                    }
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input onBlur={(e) => handlePhone(e.target.value)} type="tel"  placeholder='Your conatact number' className={`input input-bordered ${phone.error && 'border-red-400'}`} />
                                    {
                                        phone.error && <small className="text-red-400">{phone.error}</small>
                                    }
                                </div>
                                <div className='text-right text-lg font-semibold'>
                                    Total Cost: ${(wantQuantity.value * parseInt(product?.price)).toFixed(2)}
                                </div>
                                <div className="form-control mt-6">
                                    {
                                        parseInt(product?.availableQuantity) > 0 ? <button  className="btn btn-primary">Place order</button> : <button disabled className="btn btn-error ">Stock out</button>
                                    }
                                    
                                </div>

                            </form>
                        </div>
                    </div>

                }
            </div>
        </section>
    );
};

export default ProductDetail;





