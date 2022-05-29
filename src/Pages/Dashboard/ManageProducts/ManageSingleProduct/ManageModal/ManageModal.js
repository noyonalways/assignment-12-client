import React from 'react';
import axiosPrivate from '../../../../../Api/AxiosPrivate';

const ManageModal = ({deleteProduct, refetch, setDeleteProduct}) => {

    const {  name, _id} = deleteProduct;
    const handleDelete = async () => {
        await axiosPrivate.delete(`https://glacial-temple-86041.herokuapp.com/product/${_id}`);
        refetch();
        setDeleteProduct(null);
    }
    return (
        <>
            <input type="checkbox" id="manage-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-error">Are your sure, You want to delete {name}</h3>
                    <div className="modal-action">
                        <label onClick={handleDelete} className="btn btn-error text-white">Delete</label>
                        <label htmlFor="manage-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageModal;