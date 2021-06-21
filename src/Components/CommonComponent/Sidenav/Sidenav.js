import React, { useContext, useEffect, useState } from 'react';
import { faAddressBook, faBars, faCaretSquareLeft, faHome, faNewspaper, faPlus, faShoppingCart, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import './Sidenav.css'
import { Navigation, UserContext } from '../../../App';

const Sidenav = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [nav] = useContext(Navigation)
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
    <div>
      <div className={`vertical-nav bg-white ${nav.show}`} id="sidebar">
        <div className="py-4 px-3 mb-4 bg-light">
          <h3 className="ms-3 text-end text-dark cursor-pointer"><FontAwesomeIcon onClick={nav.handleNavigationOff} icon={faCaretSquareLeft} /></h3>
          <div className="media text-center">{loggedInUser.photo?<img src={loggedInUser.photo} alt="profileImg" className="mr-3 img-round" /> : 'Login first'}
            <br />
            <div className="media-body"><br />
              <p className="font-weight-light text-muted mb-0">{admin && 'Admin'} {!loggedInUser.isSignedIn && 'Login first'} {loggedInUser.isSignedIn && loggedInUser.displayName} {coAdmin && 'Co-leader'}</p>
            </div>

          </div>
        </div>

        <ul className="nav flex-column bg-white mb-0 h6">
          <li className="nav-item ">
            <Link to="/home" className="py-3 nav-link sideNav text-dark ">
              <FontAwesomeIcon className=" mx-2" icon={faHome} />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/dashboard/myOrders' className="py-3 nav-link sideNav text-dark ">
              <FontAwesomeIcon className=" mx-2" icon={faShoppingCart} />
              My Order
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/dashboard/reviewItem' className="py-3 nav-link sideNav text-dark ">
              <FontAwesomeIcon className=" mx-2" icon={faNewspaper} />
              Review
            </Link>
          </li>
          {admin && <div>
            <li className="nav-item">
              <Link className="nav-link sideNav text-dark py-3" to='/dashboard/addServices'>
                <FontAwesomeIcon className=" mx-2" icon={faPlus} />
                <span>
                  Add Services
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link sideNav text-dark py-3" to='/dashboard/makeAdmin'>
                <FontAwesomeIcon className=" mx-2" icon={faUserPlus} />
                <span>
                  Make Admin
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link sideNav text-dark py-3" to='/dashboard/adminList'>
                <FontAwesomeIcon className=" mx-2" icon={faAddressBook} />
                <span>Admin List</span>
              </Link>
            </li>
          </div>}
          {coAdmin && <div><li className="nav-item">
            <Link className="nav-link sideNav text-dark py-3" to='/dashboard/adminList'>
              <FontAwesomeIcon className=" mx-2" icon={faAddressBook} />
              <span>Admin List</span>
            </Link>
          </li>
            <li className="nav-item">
              <Link className="nav-link sideNav text-dark py-3" to='/dashboard/addServices'>
                <FontAwesomeIcon className=" mx-2" icon={faPlus} />
                <span>
                  Add Services
                </span>
              </Link>
            </li>
          </div>}
          <br /><br /><br />
          {loggedInUser.isSignedIn && <li className="nav-item cursor-pointer" onClick={handleSignOut}>
            <p className="nav-link sideNav text-dark py-3">
              <FontAwesomeIcon className=" mx-2" icon={faSignOutAlt} />
              Logout
            </p>
          </li>}
        </ul>

      </div>
      <div onClick={nav.handleNavigationOn} className="my-5">
        <button type="button" className={`${nav.btnPosition} btn mt-3 btn-light bg-white rounded-pill px-4 `}>
          <span className="me-2"><FontAwesomeIcon icon={faBars} /></span>  Menu
        </button>
      </div>
    </div>
  );
};

export default Sidenav;