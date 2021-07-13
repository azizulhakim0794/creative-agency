import { Modal } from 'react-modal';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const ModelForAll = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const history = useHistory()
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
        history.push('/home')
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
            <br />
            <p>Your Order is Successfully Added , Go to Home page.</p>
            <br />
            <p className="text-center"><button className="btn btn-success" onClick={closeModal}>Go Home!</button></p>
        </Modal>
    );
};

export default ModelForAll;