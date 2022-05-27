import React from 'react';
import PageTitle from '../../../Components/PageTitle/PageTitle';

const AddProduct = () => {
    return (
        <div>
            <PageTitle title={'Add Product'} />
            <div className="mx-auto container py-5">
                <div className='lg:w-[450px] mx-auto py-3 px-3 shadow-lg rounded'>
                    <h3 className="text-xl text-center mb-3">Add Product</h3>
                    <form className='space-y-2' action="">
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
                            <textarea placeholder='Product description' name="" id="" cols="30" rows="3" className='textarea-bordered textarea resize-none'></textarea>
                        </div>
                        <div className="form-control">
                            <input type="file" className="input input-bordered" />
                        </div>
                        <button  className="btn btn-secondary text-white w-full">Place order</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;