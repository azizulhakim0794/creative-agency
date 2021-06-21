import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const PleaseLogin = () => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <div>
            {!loggedInUser.isSignedIn && <div className=" text-center">
                                <div className="text-center ">
                                    <p>Please login and try again</p>
                                </div>
                            </div>}
        </div>
    );
};

export default PleaseLogin;