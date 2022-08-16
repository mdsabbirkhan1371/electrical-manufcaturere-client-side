import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

const PurchaseModal = ({ show, handleClose, purchase }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Do You Want To Confirm...<span className='text-success'>{purchase?.name}</span>?</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-success'>
                <p>Minimum Order : {purchase?.minimumOrder}</p>
                <p>Price : ${purchase?.price}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="success" onClick={handleClose}>
                    Confirmed
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PurchaseModal;