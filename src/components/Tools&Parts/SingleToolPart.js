import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const SingleToolPart = ({ toolPart }) => {

    const { _id, name, image, price, description, availableQuantity, minimumOrder } = toolPart;

    const navigate = useNavigate();

    const seeProductInfo = id => {
        navigate(`/tools/${id}`)
    }

    return (

        <div className="card text-success mb-5" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <hr />
            <div className="card-body px-5">
                <h5 className="card-title">{name}</h5>
                <p>Price: ${price}</p>
                <p><small>Stocks  : {availableQuantity}</small></p>
                <p><small>Minimum Order  : {minimumOrder}</small></p>
                <p className="card-text">{description.slice(0, 80)}</p>
                <Button onClick={() => seeProductInfo(_id)} variant="info">Purchase</Button>{' '}
            </div>
        </div>
    );
};

export default SingleToolPart;