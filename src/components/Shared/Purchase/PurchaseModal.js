
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify'

const PurchaseModal = ({ show, handleClose, purchase }) => {
    const [user, loading] = useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();

    if (loading) {
        return <Loading></Loading>
    }


    const onSubmit = (data) => {
        console.log(data)
        const { price, email, name, minimumOrder, product } = data;

        const booking = {
            productId: purchase._id,
            product,
            name,
            price,
            email,
            minimumOrder
        }

        fetch('http://localhost:5000/purchase', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Your Purchased Is Successful')
                    reset()
                }
                else {
                    toast.error('Your Purchased Is not Completed.')
                }
            })
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Do You Want To Confirm...<span className='text-success'>{purchase?.name}</span>?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="product">Product Name</label>
                    <input {...register("product", { required: true })} type="text" value={purchase?.name} className="w-75 form-control" /> <br />


                    <label htmlFor="price">Price</label>
                    <input {...register("price", { required: true })} type="text" value={purchase?.price} className="w-75 form-control" /> <br />

                    <label htmlFor="minimumOrder">Quantity</label>
                    <input {...register("minimumOrder", { required: true })} type="text" value={purchase?.minimumOrder} className="w-75 form-control" /> <br />

                    <label htmlFor="email">Email</label>
                    <input {...register("email", { required: true })} type="text" name='email' value={user?.email} className="w-75 form-control" /> <br />

                    <label htmlFor="name">Name</label>
                    <input {...register("name", { required: true })} type="text" name='name' value={user?.displayName} placeholder='Your name' className="w-75 form-control" /> <br />


                    <input onClick={handleClose} className="btn btn-danger" type="submit" value='Cancel' />

                    <input className="btn btn-success mx-4" type="submit" value='Confirmed' />
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default PurchaseModal;