import React from 'react';

const ManageSingleRow = ({ order, index }) => {
    const { productPrice, date, email, productName, productQuantity, totalCost, productImg } = order;
    return (
        <tr>
            <th>{parseInt(index) + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={productImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">{productName}</h3>
                        <p>Single price : ${productPrice} </p>
                        <p>Quantity: {productQuantity} </p>
                        <p>Total: ${totalCost}</p>
                    </div>
                </div>
            </td>
            
            <td>
                <h3 className="text-lg font-semibold">{email}</h3>
                <p>Transaction id{ }</p>
                <p className='badge badge-ghost'>Date {date}</p>
            </td>
            <td>
                <button className="btn-sm btn-secondary btn text-white">Pending...</button>
            </td>
            <td>
                <button className="btn-sm btn-primary btn text-white">Shipped</button>
            </td>
        </tr>
    );
};

export default ManageSingleRow;