import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { name, img, availableQuantity, price, productDescription, sold, _id } = product;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl hover:scale-[1.02] duration-200">
            <figure className=' max-w-xs py-2 mx-auto'><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <div className="space-y-0">
                    <p className='text-lg font-semibold'>Price: ${price}</p>
                    <p className='text-lg'><span className="font-semibold">Quantity:</span> {availableQuantity}</p>
                    <p className='text-lg'><span className="font-semibold">Sold:</span> {sold}</p>
                </div>
                <p className="text-base text-gray-500">{productDescription?.length > 90 ? productDescription.slice(0, 90) + '...' : productDescription}</p>
                <Link to={`/product/${_id}`}  className="btn btn-secondary text-white">Purchase</Link>
            </div>
        </div>
    );
};

export default ProductCard;