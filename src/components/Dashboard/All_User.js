import React, { useEffect, useState } from 'react';

const All_User = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/alluser')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                console.log(data)
            })
    }, [])
    return (
        <div className='text-center'>
            <h3 className='text-center'>All User: {users.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default All_User;