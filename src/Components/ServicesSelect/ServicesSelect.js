import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
// import NavBar from '../CommonComponent/NavBar/NavBar';
import Modal from 'react-modal';
import PaymentProcess from '../PaymentProcess/PaymentProcess'
import NavBar from '../CommonComponent/NavBar/NavBar.js';

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
const ServicesSelect = () => {
    const [userData, setUserData] = useState({})
    const [imageData, setImageData] = useState({})
    const [loggedInUser] = useContext(UserContext)
    const [modalIsOpen, setIsOpen] = useState(false);
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        fetch('https://obscure-castle-94167.herokuapp.com/oneServices/'+id, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setImageData(data.image.img))
            .catch(ex => console.error(ex))

        fetch('https://obscure-castle-94167.herokuapp.com/oneServices/'+id, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(item => setUserData(item))
            .catch(ex => console.error(ex))

    }, [id])


    const handleUserSelectService = () => {
        const fileData = new FormData()
        fileData.append('email', loggedInUser.email)
        fileData.append('name', userData.name)
        fileData.append('details', userData.details)
        fileData.append('image', imageData)
        fileData.append('orderTime', new Date().toDateString())
        fetch('https://obscure-castle-94167.herokuapp.com/addMyOrder', {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: fileData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    openModal()
                }
            })
            .catch(error => {
                console.log(error)
            })
    }


    // var subtitle;

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
    // const encoded = base64.b64encode(imageData)

    const images = "data:image/png;base64,"+imageData
    return (
        <>
        {loggedInUser && <div className="justify-content-center">
            <NavBar/>
            <div className="container mt-5 row justify-content-center shadow-lg m-auto p-5">
                <div className="col-md-6">
                    <PaymentProcess handleUserSelectService={handleUserSelectService}/>
                </div>
                <div className="card text-center col-md-6">
                    <img src={images} className="card-img-top-round mt-4" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-dark">{userData.name}</h5>
                        <p className="card-text text-dark">{userData.details}</p>
                    </div>
                </div>
                <div className="col-md-3"></div>

                <div>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        ariaHideApp={false}
                    >
                        <br/>
                        <p>Your Order is Successfully Added , Go to Home page.</p>
                        <br/>
                        <p className="text-center"><button className="btn btn-success" onClick={closeModal}>Go Home!</button></p>
                    </Modal>
                </div>
            </div>
            <p className="text-center mt-5"><small>© Copyright by Tamzid & updated in {new Date().getFullYear()} </small></p>
        </div>}
        </>
    );
};

export default ServicesSelect;