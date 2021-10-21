import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleService = () => {
    const { id } = useParams();
    const [services, setServices] = useState({})
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const details = data.find(td => td.id == id)
                setServices(details)
            });
        console.log(services)
    }, [id])
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div class="card my-5">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={services?.img} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{services?.name}</h5>
                                    <p class="card-text">{services?.description}</p>
                                    <p class="card-text"><small>{services?.details}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;