import React from 'react';

const ManageSingleRow = ({ order, index }) => {
    const {productPrice, date, email, productName, productQuantity, totalCost } = order;
    return (
        <tr>
            <th>{parseInt(index) + 1}</th>
            <td>
                <h3 className="text-lg font-semibold">{productName}</h3>
                <p>Single price : ${productPrice} </p>
                <p>Quantity: {productQuantity} </p>
                <p>Total: ${totalCost}</p>
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