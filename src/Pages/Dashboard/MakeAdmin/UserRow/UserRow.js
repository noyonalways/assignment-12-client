import React from 'react';

const UserRow = ({ user, index }) => {
    const { email } = user;
    return (
        <tr>
            <th>{parseInt(index) + 1}</th>
            <td>
                <h3>{email}</h3>
            </td>
            <td>
                Client
            </td>
            <th>
                <button className="btn btn-primary btn-sm text-white">Make Admin</button>
            </th>
        </tr>
    );
};

export default UserRow;