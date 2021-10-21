import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
            <img className="container-fluid mt-2 mb-3" style={{ height: 550 }} src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" />
            <div className="d-flex justify-content-center">
                <Link to="/"><button className="btn btn-warning px-3">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;