import React from 'react';
import { toast } from 'react-toastify'

const UserRow = ({ user, index, setUsers }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/alluser/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())

            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Made An Admin Successfully')
                }
                else {
                    toast.error('Failed To Make An Admin')
                }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {
                    role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm btn-success">Make Admin</button>
                }
            </td>
            <td>
                <button class="btn btn-sm btn-danger ms-2">Remove</button>
            </td>
        </tr>
    );
};

export default UserRow;