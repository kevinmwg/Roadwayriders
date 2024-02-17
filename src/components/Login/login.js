import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // createUserWithEmailAndPassword,
import './login.css'
// import app from "../../auth";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();

        // if email is not in use
        // const register = () => {
        //     createUserWithEmailAndPassword(auth, email, password)
        //         .then((userCredential) => {
        //             // Signed in
        //             const user = userCredential.user;
        //             console.log(user);
        //             setEmail("");
        //             setPassword("");
        //             navigate("/");
        //         })
        //         .catch((error) => {
        //             const errorCode = error.code;
        //             const errorMessage = error.message;
        //             console.log(errorCode, errorMessage);
        //             setError(errorMessage);
        //             // ..
        //         })
        // }
    //     signinwithemailandpassword

        const login = () => {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    setEmail("");
                    setPassword("");
                    navigate("/");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    setError(errorMessage);
                });
        }
    //     if registration says email is in use, try loggin in
        login();
    }
    return (
        <div>
            <h1>RoadwayRiders Hub</h1>
        {/*    login form*/}
            <form onSubmit={handleSubmit}>
                {/*error*/}
                <p style={{
                    color: "red"
                }}>
                    {error}
                </p>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
<br/>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;