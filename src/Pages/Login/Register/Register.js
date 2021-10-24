import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { getAuth } from "firebase/auth";
import { useHistory } from "react-router";

const Register = () => {
    const { handleRegistration } = useAuth();
    const history = useHistory();
    const { currentUser } = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (currentUser) {
        history.push("/services");
    }
    const auth = getAuth();

    const signUpSubmit = (event) => {
        event.preventDefault();
        handleRegistration(email, password);
    };

    return (
        <div className="container">
            <h2>Please Register</h2><br />
            <form onSubmit={(event) => signUpSubmit(event)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={(event) => setEmail(event.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={(event) => setPassword(event.target.value)} className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3">
                    <Link to="/login">Already Registered?</Link>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Register;