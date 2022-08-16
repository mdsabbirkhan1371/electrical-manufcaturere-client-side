import React from 'react';
import Button from 'react-bootstrap/Button';

const SingleToolPart = ({ toolPart }) => {
    const { name, image, price, description, availableQuantity, minimumOrder } = toolPart;
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
                <Button variant="info">Purchase</Button>{' '}
            </div>
        </div>


    );
};

export default SingleToolPart;