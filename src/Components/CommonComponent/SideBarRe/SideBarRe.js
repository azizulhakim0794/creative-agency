import React, { useContext, useEffect, useState } from 'react';
import './SideBarRe.css'
import { } from 'react-bootstrap';
import "firebase/auth";
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext } from '../../../App';
import { faAddressBook, faPlus, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


const SideBarRe = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    const [admin, setAdmin] = useState(false)
    const [coAdmin, setCoAdmin] = useState(false)
    useEffect(() => {
        fetch('https://obscure-castle-94167.herokuapp.com/mainLeader', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(data))
            .catch(error =>
                console.log(error))
        fetch('https://obscure-castle-94167.herokuapp.com/findCoLeader', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setCoAdmin(data))
            .catch(error =>
                console.log(error))
    }, [loggedInUser.email])
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            console.log(' Sign-out successful.')
            setLoggedInUser({})
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className="col-md-3 ">
            <>
                <IconContext.Provider value={{ color: 'black' }}>
                    <div className={`navbarB bar-top`} onClick={showSidebar}>
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars className='svgMr' />
                        </Link>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            <li className="nav-textB">
                                <Link to='/home'>
                                    <AiIcons.AiFillHome />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="nav-textB">
                                <Link to='/dashboard/myOrders'>
                                    <FaIcons.FaCartPlus />
                                    <span>Orders</span>
                                </Link>
                            </li>
                            <li className="nav-textB">
                                <Link to='/dashboard/reviewItem'>
                                    <IoIcons.IoIosPaper />
                                    <span>Review</span>
                                </Link>
                            </li>
                            {admin && <div>
                                <li className="nav-textB">
                                    <Link to='/dashboard/addServices'>
                                        <FontAwesomeIcon icon={faPlus} />
                                        <span>
                                            Add Services
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-textB">
                                    <Link to='/dashboard/makeAdmin'>
                                        <FontAwesomeIcon icon={faUserPlus} />
                                        <span>
                                            Make Admin
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-textB">
                                    <Link to='/dashboard/adminList'>
                                        <FontAwesomeIcon icon={faAddressBook} />
                                        <span>Admin List</span>
                                    </Link>
                                </li>
                            </div>}

                            {coAdmin && <div><li className="nav-textB">
                                <Link to='/dashboard/adminList'>
                                    <IoIcons.IoMdPeople />
                                    <span>Admin List</span>
                                </Link>
                            </li>
                                <li className="nav-textB">
                                    <Link to='/dashboard/addServices'>
                                        <FontAwesomeIcon icon={faPlus} />
                                        <span>
                                            Add Services
                                        </span>
                                    </Link>
                                </li>
                            </div>}
                            {loggedInUser.isSignedIn && <li className="nav-textB" onClick={handleSignOut}>
                                <Link to='/dashboard/adminList'>
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                    <span> Logout</span>
                                </Link>
                            </li>}
                            <br />
                        </ul>
                    </nav>
                </IconContext.Provider>
            </>
        </div>
    );
};

export default SideBarRe;