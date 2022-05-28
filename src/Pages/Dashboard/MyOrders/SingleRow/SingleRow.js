import React from 'react';
import { Link } from 'react-router-dom';

const SingleRow = ({order, index}) => {
    const {productImg, productPrice, date, email, productName, productQuantity, totalCost, price , _id} = order;
    return (
        <tr>
            <th>{parseInt(index) +1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={productImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">{productName}</div>
                        <div className="text-base opacity-50">Price: ${productPrice}</div>
                    </div>
                </div>
            </td>
            <td>
                <div>Quantity: {productQuantity}</div>
                <p>Per product price: ${productPrice}</p>
                <div>Total Cost: ${totalCost}</div>
            </td>
            <td>
                {email}
                <br />
                <span className="badge badge-ghost ">Transaction id</span>
                <span className="badge badge-ghost badge-sm block">{date}</span>
            </td>
            
            <td>{(!order?.unpaid) ? <Link to={`/dashboard/payment/${_id}`} className='btn btn-warning btn-sm text-white'>Pay</Link> : <button className='btn btn-secondary btn-sm'>Paid</button>}</td>
            <th>
                <button className="btn btn-error btn-sm text-white">Cancel Order</button>
            </th>
        </tr>
    );
};

export default SingleRow;