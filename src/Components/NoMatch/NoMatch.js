import React from 'react';

const NoMatch = () => {
    // const [loggedInUser] = useContext(UserContext)
    return (
        <div>
            <div className=" text-center">
                <div className="text-center ">
                    <p>Please login and try again</p>
                    <h3>404</h3>
                </div>
            </div>
        </div>
    );
};

export default NoMatch;