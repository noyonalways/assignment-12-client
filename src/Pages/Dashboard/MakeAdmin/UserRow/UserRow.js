import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../../Api/AxiosPrivate';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    const handleMakeAdmin = async () => {
        try {
            const { data } = await axiosPrivate.put(`http://localhost:5000/user/admin/${email}`)
            refetch();
            if (data.acknowledged) {
                toast.success("Successfully made an Admin", {toastId: 'admin'})
            }
        } catch (error) {
            if(error.response.status === 403){
                toast.error("Failed to make an Admin", {toastId: 'noAdmin'})
            }
        }
    }


    return (
        <tr>
            <th>{parseInt(index) + 1}</th>
            <td>
                <h3>{email}</h3>
            </td>
            <td className='font-semibold'>
                {role === 'admin' ? 'Admin' : "Client"}
            </td>
            <th>
                <button disabled={role === 'admin'} onClick={handleMakeAdmin} className="btn btn-primary btn-sm text-white disabled:bg-gray-300">Make Admin</button>
            </th>
        </tr>
    );
};

export default UserRow;