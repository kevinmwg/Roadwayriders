import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import {getAuth} from "firebase/auth";
import resized from "../../images/3 - Copy.png";
// import {Helmet} from 'react-helmet';
import app from "../../auth";
import {getFirestore, collection, getDocs} from "firebase/firestore";

function Home() {
    const auth = getAuth();
    const user = auth.currentUser;
    const [operators, setOperators] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore(app)
            const data = await getDocs(collection(db, "operators"));
            setOperators(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        };
        fetchData().then(r => console.log(r)).catch(e => console.log(e));
    }, []);

    // console.log(operators);

    const filteredOperators = operators.filter(operator =>
        Object.values(operator)
            .join(' ')
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );
    // 1 operator has:
    // county, email, locality, phone, regNumber, serviceOffered, vehicleType


    // in the ui, create a card that will map all the operators information

    if (user) {
        console.log(user.email);
    }
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };




    return (
<div>
     {/*               <Helmet>*/}
     {/*                   */}
     {/*                   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2262976391939787"*/}
     {/*crossorigin="anonymous"></script>*/}
     {/*               </Helmet>*/}


        <div>

            <div className="navbar">
                <div className="brand">
                    <a href="/">RoadwayRiders Hub</a>

                    
        
                    <div className = "slogan">
                        <a href="/">Navigating , paving the way</a>

                    </div>
                </div>
                <div className="menu-icon" onClick={toggleMobileMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>


                            <p>{
                                user ? user.email : ""
                            }
                            </p>
                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/landing">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register Operator</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to="/donate">Donate</Link>
                </div>

                <div>
                <img src={resized}  alt=""/>

                </div>
                </div>


        </div>

    <div className="search-bar">
        <input
            type="text"
            placeholder="Search operators..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
        />
    </div>

    <div className="operators">
        {
            filteredOperators.map((operator, index) => (
                <div key={index} className="operator">
                    <h1>{operator.county}</h1>
                    <p>{operator.email}</p>
                    <p>{operator.locality}</p>
                    <p>{operator.phone}</p>
                    <p>{operator.regNumber}</p>
                    <p>{operator.serviceOffered}</p>
                    <p>{operator.vehicleType}</p>

                </div>
            ))
        }
    </div>



</div>




    );
}
export default Home;
