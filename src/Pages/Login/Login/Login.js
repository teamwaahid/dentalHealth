import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const { handleLogIn, signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logInSubmit = () => {
        handleLogIn(email, password);
    };


    return (
        <div className="container" id="loginSection">
            <h2>Please Login</h2><br />
            <form onSubmit={logInSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={(event) => setEmail(event.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={(event) => setPassword(event.target.value)} className="form-control" id="exampleInputPassword1" required />
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
            </form><br /><br />
            <Link to="/signup">Didn't Registered?</Link>
            <br /><br />
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;