import { useEffect, useState } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');
    const { error, setError } = useState('');

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // const handleEmailInput = (e) => {
    //     setEmail(e.target.value);
    // }
    // const handlePasswordInput = (e) => {
    //     setPassword(e.target.value);
    // }
    const handleRegistration = (email, password) => {
        // e.preventDefault();
        // console.log(handleEmailInput, handlePasswordInput);
        // if (password.length < 6) {
        //     setError('Password Must be at Least 6 Character Long');
        //     return;
        // }
        // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        //     setError('Password Must Contain 2 Uppercase');
        //     return;
        // }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
            })
    }

    const handleLogIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setError('');
            })
    }

    // Login With GooGle
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    return {
        handleRegistration,
        handleLogIn,
        email,
        password,
        error,
        signInUsingGoogle,
        user,
        isLoading,
        logOut
    }
}
export default useFirebase;
















    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    // const auth = getAuth();

    // 

    // // Registration with Email and Password

    // const handleNameInput = e => {
    //     setName(e.target.value);
    // }
    // const handleEmailChange = e => {
    //     setEmail(e.target.value);
    // }
    // const handlePasswordChange = e => {
    //     setPassword(e.target.value);
    // }
    // const handleError = () => {
    //     error = error;
    // }

    // const handleRegistration = e => {
    //     e.preventDefault();
    //     console.log(email, password);
    //     // if (password.length < 6) {
    //     //     setError('Password Must be at Least 6 Character Long');
    //     //     return;
    //     // }
    //     // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //     //     setError('Password Must Contain 2 Uppercase');
    //     //     return;
    //     // }
    // }

    // return {
    //     user,
    //     isLoading,
    //     signInUsingGoogle,
    //     handleNameInput,
    //     handleEmailChange,
    //     handlePasswordChange,
    //     handleRegistration,
    //     handleError,
    //     logOut
    // }


