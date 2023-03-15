import React from 'react';
import axiosPrivate from '../../../../../Api/AxiosPrivate';

const DeleteConfirmModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
    const { productName, _id, productId, productQuantity } = deleteOrder;

    const handleDelete = async () => {
        const { data } = await axiosPrivate.delete(`/order/${_id}`);
        console.log('delete method', data);
        setDeleteOrder(null);
        const { data: product } = await axiosPrivate.get(`/product/${productId}`);
        console.log("get method", product);

        const newQuantity = parseInt(product?.availableQuantity) + parseInt(productQuantity);
        const newSoldQuantity = parseInt(product?.sold) - parseInt(productQuantity);
            
        const updatedProduct = {
            quantity: newQuantity,
            sold: newSoldQuantity
        }
        const { data: result1 } = await axiosPrivate.put(`/product/${productId}`, updatedProduct);
        console.log('put method', result1);
        refetch();

    }

    return (
        <>
            <input type="checkbox" id="manage-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-error">Are your sure, You want to delete {productName}</h3>
                    <div className="modal-action">
                        <label onClick={handleDelete} className="btn btn-error text-white">Delete</label>
                        <label htmlFor="manage-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteConfirmModal;