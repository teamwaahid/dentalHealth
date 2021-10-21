import React from 'react';
import { Link } from 'react-router-dom';

const RenderedService = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <div className='col-md-4 mb-4'>
            <div className='card h-100'>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <div className="d-grid gap-2">
                        <Link to={`/services/${id}`}>
                            <button type="button" className="btn btn-info">Know More {name.toLowerCase()}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RenderedService;