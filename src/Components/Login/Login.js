import React, { useContext , useEffect} from 'react';
import './Login.css'
import "firebase/auth";
import firebase from 'firebase/app';
import firebaseConfig from '../Login/FirebaseConfig/Firebase.config'
import logo from '../../images/logos/logo.png'
import google from '../../images/icons/google.png'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                // console.log(idToken)
                sessionStorage.setItem('token', idToken)
            }).catch(function (error) {
                // Handle error
            });
    }
    const signInWithGoogle = () => {

        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const user = result.user;

                const { displayName, email, photoURL, uid } = user
                const isSignedInGoogle = {...loggedInUser}
                isSignedInGoogle.isSignedIn= true
                isSignedInGoogle.name= displayName
                isSignedInGoogle.email= email
                isSignedInGoogle.photo= photoURL
                isSignedInGoogle.uid= uid
                
                setLoggedInUser(isSignedInGoogle)
                
                storeAuthToken()

            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                if(errorCode || errorMessage ||email || credential){
                    console.log(errorMessage , error, credential, email)
                }
            });
    }
    useEffect(()=>{   
        if (loggedInUser.isSignedIn) {
            history.replace(from);
          }
    },[loggedInUser.isSignedIn])
    return (
        <div className="container">
            <p className="text-center mt-5">
                <img className="navbar-img" src={logo} alt="" />
            </p>
            <div className="d-flex justify-content-center mt-5">
                <div className="card col-md-4 col-sm-12 col-xs-12">
                    <div className="round-pill p-5 ">
                        <h2 className="text-center">Login with</h2><br />
                        <p className="text-center row d-flex" onClick={signInWithGoogle}>
                            <span className="border google-formate p-1"> <img className="col-md-4 google-icon" src={google} alt="" /> <span className="col-md-8 mr-3"> Continue with google</span></span>
                        </p>
                        <p className="text-center">
                            Don't have an account <span className="text-primary create-account" onClick={signInWithGoogle}><u>Create a new account</u></span>
                        </p>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
    );
};

export default Login;