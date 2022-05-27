import React from 'react';

const ManageSingleProduct = ({ product, index }) => {
    const { img, name, price, sold,  availableQuantity} = product;
    return (
        <tr>
            <th>{parseInt(index) + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">{name}</div>
                        <div className="text-base opacity-50">Price: ${price}</div>
                    </div>
                </div>
            </td>

            <td>
                <h3>Avaliable quantity: {availableQuantity}</h3>
                <h3>Sold: {sold}</h3>
            </td>
            <th>
                <button className="btn btn-error btn-sm text-white">Delete</button>
            </th>
        </tr>
    );
};

export default ManageSingleProduct;