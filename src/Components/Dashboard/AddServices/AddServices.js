import React, { useContext, useState } from 'react';
import './AddServices.css';
import Button from '@material-ui/core/Button';
import { Navigation, UserContext } from '../../../App';
import { useHistory } from 'react-router';
import Sidenav from '../../CommonComponent/Sidenav/Sidenav';


const AddServices = () => {
    const [loggedInUser] = useContext(UserContext)
    const [nav] = useContext(Navigation)
    const [info, setInfo] = useState({
        name: '',
        details: ''
    })
    const history = useHistory()
    const [file, setFile] = useState(null)
    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0]
        setFile(newFile)

    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('details', info.details);

        fetch('https://obscure-castle-94167.herokuapp.com/addServices', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    history.push('/dashboard')
                }
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault()


    }


    return (
        <>
            {loggedInUser.isSignedIn && <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidenav />
                    </div>
                    <div className={`container ${nav.show}`} id="content">
                        <div className="d-flex justify-content-center">
                        <div className="col-md-8 mt-5 ml-3">
                            <h3 className="text-mix">Add Services</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="form-label">Services Name</label>
                                    <input type="text" onBlur={handleBlur} className="form-control" name="name" placeholder="Enter Services Name" required />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Services Details</label>
                                    <input type="text" onBlur={handleBlur} className="form-control" name="details" placeholder="Enter Services Details" required />
                                </div>
                                <div className="mb-3">
                                    <Button
                                        variant="contained"
                                        component="label"
                                        className="btn btn-outline-success"

                                    >
                                        Upload File
                                 <input
                                            type="file"
                                            hidden
                                            onChange={handleFileChange}
                                            required
                                        />
                                    </Button>

                                </div>
                                <br /><br />
                                <button type="submit" className="btn btn-success">Submit</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>

            </div>}
            {!loggedInUser.isSignedIn && <div className="text-center margin-0"><p>This page is not Available </p><h3>404</h3></div>}
        </>
    );
};
export default AddServices;