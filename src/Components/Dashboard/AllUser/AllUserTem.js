import React, { useState } from 'react';
const AllUserTem = ({ data }) => {
    const [states, setStates] = useState('Pending')
    const [btnColor, setBtnColor] = useState('warning')
    const [display, setDisplay] = useState('d-none')
    const [btnName, setBtnName] = useState('Edit')
    const handleEdit = (e) => {
        if (display === 'd-none') {
            setDisplay('')
            setBtnName('Save')
        }
        if (!display.length) {
            setDisplay('d-none')
            setBtnName('Edit')
            fetch(`https://obscure-castle-94167.herokuapp.com/dashboard/statesUpdate/${e}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "states": states, 'btnColor': btnColor })
            })
                .then(response => response.json())
                .then(data => console.log('updated'))
        }

        console.log(e)
    }
    const handleOnGoing = () => {
        setStates('On Going');
        setBtnColor('success');

    }
    const handleFinish = () => {
        setStates('Finish');
        setBtnColor('danger');
    }
    const handlePending = () => {
        setStates('Pending');
        setBtnColor('warning');
    }
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={data.userImg} className="img-fluid img-thumbnail rounded" alt={data._id} />

                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-title h4">{data.userName}</p>
                        <p className="card-text h5">{data.orderName}</p>
                        <p className="card-text">Order Time : {data.orderTime}</p>
                        <div className="card-text"><div className="dropdown">
                        <button className={`btn btn-${data.btnColor} col-md-4`} disabled type="button">
                                    {data.states}
                                </button><br /><br />
                            <div className="btn-group">
                                <button className={`btn btn-${btnColor}`} disabled type="button">
                                    {states}
                                </button>
                                <button type="button" className={`btn btn-secondary dropdown-toggle dropdown-toggle-split ${display}`} itemDisable data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button onClick={handleOnGoing} className="dropdown-item">On Going</button></li>
                                    <li><button onClick={handlePending} className="dropdown-item">Pending</button></li>
                                    <li><button onClick={handleFinish} className="dropdown-item">Finish</button></li>
                                </ul>
                            </div><button onClick={() => handleEdit(data._id)} className="ms-5 btn btn-primary">{btnName}</button>
                        </div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUserTem;