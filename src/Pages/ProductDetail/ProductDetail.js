import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingRipple from '../../Components/LoadingRipple/LoadingRipple';
import auth from '../../Firebase/Firebase.init';

const ProductDetail = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const { data, isLoading } = useQuery('singleProduct', async () => await axios.get(`http://localhost:5000/product/${id}`));
    const product = data?.data;
    // const { name, img, availableQuantity, price, productDescription, sold, _id } = product;
    console.log(product?.name);

    const placeOrder = event => {
        event.preventDefault();
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
                                <p className='text-lg font-semibold'>Price: ${product?.price}</p>
                                <p className='text-lg '><span className="font-semibold">Quantity:</span> {product?.availableQuantity}</p>
                                <p className='text-lg'><span className="font-semibold">Sold:</span> {product?.sold}</p>
                            </div>
                            <p className="text-base text-gray-500 ">{product?.productDescription}</p>
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={placeOrder} class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" disabled value={user?.displayName} class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" disabled value={user?.email} class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Quantity</span>
                                    </label>
                                    <input type="number" placeholder='Quantity you want' class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder='Address' class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Phone</span>
                                    </label>
                                    <input type="text" placeholder='Your conatact number' class="input input-bordered" />
                                </div>
                                <div class="form-control mt-6">
                                    <button  class="btn btn-primary">Place order</button>
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





