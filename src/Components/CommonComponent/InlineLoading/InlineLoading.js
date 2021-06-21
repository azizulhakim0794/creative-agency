import React from 'react';

const InlineLoading = () => {
    return (
        <div className="m-auto">
            <br />
            <div className="mt-5 text-center">
                <div className="spinner-border text-success " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="h3 user-select-none">Loading...</p>
            </div>
            <br />
        </div>
    );
};

export default InlineLoading;