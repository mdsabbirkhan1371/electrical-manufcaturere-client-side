import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const All_User = () => {

    const [users, setUsers] = useState([])
    const [loading] = useState()


    useEffect(() => {
        fetch('https://electrical-manufactere.herokuapp.com/alluser')
            .then(res => res.json())
            .then(data => {

                setUsers(data)

            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='text-center'>
            <h3 className='text-center'>All User: {users.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <UserRow
                                user={user}
                                index={index}
                                setUsers={setUsers}
                            ></UserRow>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default All_User;