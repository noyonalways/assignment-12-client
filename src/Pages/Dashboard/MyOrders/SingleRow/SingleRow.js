import React from 'react';
import { Link } from 'react-router-dom';

const SingleRow = ({order, index, setDeleteOrder}) => {
    const {productImg, productPrice, date, email, productName, productQuantity, totalCost, paid , _id, transactionId} = order;
    return (
        <tr >
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
                {
                    paid && <span className="text-sm text-secondary">Transaction id: {transactionId}</span>
                }
                <span className="badge badge-ghost badge-sm block">{date}</span>
            </td>
            
            <td>{(!paid) ? <Link to={`/dashboard/payment/${_id}`} className='btn btn-secondary btn-sm text-white'>Pay</Link> : <span className='text-secondary '>Paid</span>}</td>
            <th>
                {
                    !paid && <label onClick={() => setDeleteOrder(order)}  htmlFor="delete-confirm-modal" className="btn btn-error text-white modal-button btn-sm">Cancel Order</label>
                }
            </th>
        </tr>
    );
};

export default SingleRow;