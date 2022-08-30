import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyPurchase = () => {
    const [purchases, setPurchases] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`https://electrical-manufactere.herokuapp.com/purchase?email=${user.email}`, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json()

                )
                .then(data => setPurchases(data))
        }
    }, [user])

    return (
        <div>
            <h3 className='mb-5 text-center'>My Purchase Items :{purchases?.length}</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Purchase Quantity</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases?.map((p, index) =>
                                <tr
                                    key={p._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{p.productName}</td>
                                    <td>${p.price}</td>
                                    <td>{p.orderQuantity}</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary mr-3">Make Payment</button>
                                        <button class="btn btn-sm btn-danger">Cancel Order</button>
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPurchase;