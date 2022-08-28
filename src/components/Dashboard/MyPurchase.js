import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyPurchase = () => {
    const [purchses, setPurchases] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setPurchases(data)
                })
        }
    }, [user])

    return (
        <div>
            <h3 className='text-center mb-5'>My Purchase Items :{purchses.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product Price</th>

                            <th>Purchase Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchses.map((p, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{p.productName}</td>
                                    <td>${p.price}</td>
                                    <td>{p.orderQuantity}</td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPurchase;