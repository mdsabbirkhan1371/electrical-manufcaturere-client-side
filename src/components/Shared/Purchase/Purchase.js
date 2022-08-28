import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import PurchaseModal from './PurchaseModal';


const Purchase = () => {
    const { id } = useParams()
    const [purchase, setPurchase] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch(`http://localhost:5000/purchase/${id}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [id])


    return (

        <div>
            <div className="mx-auto my-5 card text-success mb-5" style={{ width: "18rem" }}>
                <img src={purchase?.image} className="card-img-top" alt="..." />
                <hr />
                <div className="card-body px-5">
                    <h5 className="card-title">{purchase?.name}</h5>
                    <p>Price: ${purchase?.price}</p>
                    <p><small>Stocks  : {purchase?.availableQuantity}</small></p>
                    <p><small>Minimum Order  : {purchase?.minimumOrder}</small></p>
                    <p className="card-text">{purchase?.description.slice(0, 80)}</p>
                    <Button className='pb-5' onClick={handleShow} variant="info">Confirmed Purchase</Button>
                    <PurchaseModal purchase={purchase} show={show} handleClose={handleClose} />
                </div>
            </div>
        </div>


    );
};

export default Purchase;