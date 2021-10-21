import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
                        <li className="nav-item"><Link to="/home" className="nav-link px-2 text-muted">Home</Link></li>
                        <li className="nav-item"><Link to="/services" className="nav-link px-2 text-muted">Services</Link></li>
                        <li className="nav-item"><Link to="/experts" className="nav-link px-2 text-muted">Experts</Link></li>
                        <li className="nav-item"><Link to="/newpatient" className="nav-link px-2 text-muted">New Patients</Link></li>
                        <li className="nav-item"><Link to="/appoinment" className="nav-link px-2 text-muted">Appoinment</Link></li>
                    </ul>
                    <p className="text-center text-muted">© 2021 Dental Health, Inc</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;