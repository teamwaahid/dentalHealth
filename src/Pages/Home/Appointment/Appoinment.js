import React from 'react';

const Appoinment = () => {
    return (
        <div>
            <div>
                <img src="https://www.idp.com/medias/1366-x-446-book-appointment-.jpg?context=bWFzdGVyfGltYWdlc3wxNjUzMTJ8aW1hZ2UvanBlZ3xoMmYvaDBhLzEwMDMzNzA4MzY3OTAyLzEzNjYgeCA0NDYgYm9vayBhcHBvaW50bWVudCAuanBnfDFmOThlNDM3YjRmYzFhYjRhZTIyOTViODZjN2ZkYTAxZjE0NjU3MDhiYjU4ZDBhYmIwMThiNTU5MjhlOTcyMDY" className="img-fluid" alt="..." />
            </div>
            <h2 className="my-5 text-center">Request Your Appointment</h2>
            <div className="card my-5 container">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="https://jacksonfamilydentalonline.com/wp-content/uploads/2020/07/front-desk-jackson-family-dental.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6 ps-5 pt-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;