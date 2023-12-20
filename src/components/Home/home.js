import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import {getAuth} from "firebase/auth";
import resized from "../../images/3 - Copy.png";

function Home() {

    // get signed in user if any
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        console.log(user.email);
    }

    return (


        <div>

            <div className="navbar">
                <div className="brand">
                    <a href="#">RoadwayRiders Hub</a>

                    <div className = "slogan">
                        <a href="#">Navigating , paving the way</a>

                    </div>
                </div>
                <div className="menu-icon">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                            <p>{
                                user ? user.email : ""
                            }
                            </p>
                <div className="nav-links">
                    {/*<a href="">Home</a>*/}
                    <Link to="/landing">Home</Link>
                    {/*<a href="login.html">Login</a>*/}
                    <Link to="/login">Login</Link>
                    {/*<a href="Registration.html">Register Operator</a>*/}
                    <Link to="/register">Register Operator</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to="/donate">Donate</Link>
                </div>
                <div>
                <body>
                <img src={resized}  alt=""/>
    
                </body>
                </div>
                </div>


        </div>






    );
}
export default Home;