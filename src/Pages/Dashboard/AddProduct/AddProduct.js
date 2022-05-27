import React from 'react';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import { BsImage } from 'react-icons/bs'
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '13a77e00f6f2c4e4acc3db7d35966c60';

    const onSubmit =  data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('ProductImage', image)
        const imageUrl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(imageUrl, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    return (
        <div>
            <PageTitle title={'Add Product'} />
            <div className="mx-auto container py-5">
                <div className='lg:w-[450px] mx-auto py-3 px-3 shadow-lg rounded'>
                    <h3 className="text-2xl font-semibold text-center mb-3">Add Product</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2' action="">
                        <div className="form-control">
                            <input type="text" placeholder='Product name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="number" placeholder='Product price' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="number" placeholder='Product quantity' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="number" placeholder='Minimum order quantity' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <textarea placeholder='Product description' name="" id="" cols="30" rows="3" className='textarea-bordered textarea resize-none'></textarea>
                        </div>
                        <div className="flex w-full bg-red-200 justify-center p-3">
                            <label htmlFor='browseFile' className='text-center cursor-pointer   '>
                                <BsImage className='text-5xl block mx-auto' />
                                <h3 className='text-center' type='button'>Browse Image</h3>
                                <input {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is required"
                                    }
                                })} type="file" className="w-full p-2 bg-blue-200" id='browseFile' />
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