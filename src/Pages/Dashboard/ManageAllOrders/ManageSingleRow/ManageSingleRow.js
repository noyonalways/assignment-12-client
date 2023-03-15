import React from 'react';
import axiosPrivate from '../../../../Api/AxiosPrivate';

const ManageSingleRow = ({ order, index, setDeleteOrder, refetch }) => {
    const { productPrice, date, email, productName, productQuantity, totalCost, productImg, paid, transactionId, status, _id } = order;

    const handlePending = async () => {
        await axiosPrivate.put(`/status/${_id}`);
        refetch();
    }

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
                {
                    transactionId && <p className='text-secondary'>Transaction id: {transactionId}</p>
                }
                <p className='badge badge-ghost'>Date {date}</p>
            </td>
            <td>
                {
                    paid ? (<button onClick={handlePending} className={`btn-sm btn text-white ${status === 'shipped' ? 'btn-primary': 'btn-secondary '}`}>{status}</button>) : <span className='text-warning font-semibold'>Unpaid</span>
                }
            </td>
            <td>
                {
                    !paid && <label onClick={() => setDeleteOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-error text-white modal-button btn-sm">Delete</label>
                }
            </td>
        </tr>
    );
};

export default ManageSingleRow;