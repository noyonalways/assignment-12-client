import React, { useState } from 'react';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import { BsImage } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import axiosPrivate from '../../../Api/AxiosPrivate';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '901b43421c17ab24dc772d52a7abee42';
    const [loading, setLoaging] = useState(false);

    

    const onSubmit = async (product) => {
        setLoaging(true);
        const image = product.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, formData);
        const  imgUrl = data?.data.url;
        


        const newProduct = {
            name: product.name,
            img: imgUrl,
            price: parseFloat(product.price),
            availableQuantity: parseInt(product.availableQuantity),
            minQunatity: parseInt(product.minQunatity),
            productDescription: product.productDescription,
            sold: 0,
        };
        
        const {data: result, } = await axiosPrivate.post(`https://glacial-temple-86041.herokuapp.com/product`, newProduct);
        console.log(result);
        reset();
        setLoaging(false);
        
    }
    if(loading){
        return <LoadingRipple/>
    }

    return (
        <div data-aos="fade-up" data-aos-duration="1000">
            <PageTitle title={'Add Product'} />
            <div className="mx-auto container py-5">
                <div className='lg:w-[450px] mx-auto py-3 px-3 shadow-lg rounded'>
                    <h3 className="text-2xl font-semibold text-center mb-3">Add Product</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2' action="">
                        <div className="form-control">
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: "Product is required"
                                }
                            })} type="text" placeholder='Product name' className="input input-bordered" />
                            {errors.name?.type === 'required' && <small className='text-red-400 mt-1'>{errors.name.message}</small>}
                        </div>
                        <div className="form-control">
                            <input  {...register("price", {
                                required: {
                                    value: true,
                                    message: "Product price is required"
                                },
                            })} type="number" placeholder='Product price' className="input input-bordered" />
                            {errors.price?.type === 'required' && <small className='text-red-400 mt-1'>{errors.price.message}</small>}
                        </div>
                        <div className="form-control">
                            <input  {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: "Product quantity is required"
                                }
                            })} type="number" placeholder='Product quantity' className="input input-bordered" />
                            {errors.availableQuantity?.type === 'required' && <small className='text-red-400 mt-1'>{errors.availableQuantity.message}</small>}
                        </div>
                        <div className="form-control">
                            <input  {...register("minQunatity", {
                                required: {
                                    value: true,
                                    message: "Product minimum order quantity is required"
                                }
                            })} type="number" placeholder='Minimum order quantity' className="input input-bordered" />
                            {errors.minQunatity?.type === 'required' && <small className='text-red-400 mt-1'>{errors.minQunatity.message}</small>}
                        </div>
                        <div className="form-control">
                            <textarea {...register("productDescription", {
                                required: {
                                    value: true,
                                    message: "Product description is required"
                                }
                            })} placeholder='Product description' cols="30" rows="3" className='textarea-bordered textarea resize-none'></textarea>
                            {errors.productDescription?.type === 'required' && <small className='text-red-400 mt-1'>{errors.productDescription.message}</small>}
                        </div>
                        <div className="flex w-full justify-center p-3">
                            <label htmlFor='browseFile' className='text-center cursor-pointer   '>
                                <BsImage className='text-5xl block mx-auto' />
                                <h3 className='text-center' type='button'>Browse Image</h3>
                                <input {...register("img", {
                                    required: {
                                        value: true,
                                        message: "Image is required"
                                    }
                                })} type="file" className="w-full p-2" id='browseFile' />
                                {errors.img?.type === 'required' && <small className='text-red-400 mt-1'>{errors.img.message}</small>}
                            </label>
                        </div>
                        <button className="btn btn-secondary text-white w-full">Place order</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;