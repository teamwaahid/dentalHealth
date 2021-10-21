import React, { useEffect, useState } from 'react';
import RenderedService from './RenderedService';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="container" id="services">
            <h2 className="text-center mt-5 mb-5">Our services</h2>
            <div className="row">
                {
                    services.map(service => <RenderedService
                        key={service.id}
                        service={service}
                    ></RenderedService>)
                }
            </div>
        </div>
    );
};

export default Services;