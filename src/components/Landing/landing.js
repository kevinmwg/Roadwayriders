import React from 'react';
import './landing.css';
import {Link} from "react-router-dom";
import resized from "../../images/resized.png";
import png111 from "../../images/pngwing.com (1).png";
import png22 from "../../images/pngwing.com (2).png";
import png33 from "../../images/pngwing.com (3).png";
import png4 from "../../images/pngwing.com (4).png";
import png55 from "../../images/pngwing.com (5).png";
import png66 from "../../images/pngwing.com (6).png";
import png77 from "../../images/pngwing.com (7).png";
import png88 from "../../images/pngwing.com (8).png";
import car from "../../images/kisspng-car-towing-service-tow-truck-roadside-assistance-5b1f8d6d40d926.8491902915287944772656.png";
import png99 from "../../images/pngwing.com (9).png";
import png1010 from "../../images/pngwing.com (10).png";
import png1111 from "../../images/pngwing.com (11).png";
import png1212 from "../../images/pngwing.com (12).png";
import png1313 from "../../images/pngwing.com (13).png";
import png1414 from "../../images/pngwing.com (14).png";
import png15 from "../../images/pngwing.com (15).png";
import png17 from "../../images/pngwing.com (17).png";
import png18 from "../../images/pngwing.com (18).png";
import png19 from "../../images/pngwing.com (19).png";
import png20 from "../../images/pngwing.com (20).png";
import png23 from "../../images/pngwing.com (23).png";
import png25 from "../../images/pngwing.com (25).png";

const Landing = () => {
    return (
        <div>
            <div className="navbar">
                <h1>RoadwayRiders Hub</h1>
                {/*<a href="Registration.html">Register</a>*/}
                <Link to="/register">Register Operator</Link>
                <Link to="/donate">Donate</Link>
            </div>

            <div className="container">
                <div className="card">
                    <img src={car} alt="Card 1"/>
                        <p>Register your recovery service to connect with those in need, ensuring your business is readily accessible..</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png1010} alt="Card 2"/>
                        <p>Home movers can build a solid reputation by featuring on our platform, gaining trust and new clients for seamless relocations.</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={resized} alt="Card 3"/>
                        <p> Make your recovery service accessible to a wider audience by signing up, ensuring prompt assistance for those in distress.</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png4} alt="Card 4"/>
                        <p>Streamline your services and reach more clients. Learn more.</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={resized} alt="Card 5"/>
                        <p>Farm equipment owners, make your machinery available to a broader agricultural audience and grow your equipment rental business.</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png33} alt="Card 6"/>
                        <p>Stay competitive and relevant in the industry. Learn more.</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png23} alt="Card 7"/>
                        <p>Power saw experts, make your services accessible for various cutting needs, connecting with clients looking for your expertise."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={resized} alt="Card 8"/>
                        <p>Lawn maintenance experts, connect with homeowners seeking your services and showcase your skills on our platform</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png18} alt="Card 9"/>
                        <p>Garden service professionals can flourish by showcasing their skills on our platform, connecting with homeowners in need of their expertise."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png20} alt="Card 10"/>
                        <p>Boost your farm equipment rental business by showcasing your machinery on our platform, attracting more users and growing your revenue."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png25} alt="Card 11"/>
                        <p>Water transportation truck operators, amplify your business opportunities by connecting with clients in need of bulk water transport services through our platform, ensuring a consistent flow of assignments.</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png111} alt="Card 12"/>
                        <p>List your construction equipment for hire and expand your clientele by featuring on our platform, reaching a broader customer base."</p>
                        <Link to="/register">Learn more</Link>

                </div>
                <div className="card">
                    <img src={png22} alt="Card 13"/>
                        <p>Equipment rental businesses, feature your construction machinery to increase bookings and expand your customer base."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png77} alt="Card 14"/>
                        <p>Forklift operators, expand your reach and connect with businesses in need of your material handling expertise by featuring on our platform, boosting your business opportunities."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png66} alt="Card 15"/>
                        <p>Crane operators, expand your crane rental business and attract more clients by showcasing your equipment through our platform.</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png99} alt="Card 16"/>
                        <p>Excavator operators, increase your market reach and connect with construction projects seeking your digging prowess by featuring on our platform, ensuring more opportunities come your way."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png88} alt="Card 17"/>
                        <p>Bucket loader operators, broaden your market presence and connect with businesses requiring your material handling skills by showcasing on our platform, ensuring a steady flow of job opportunities."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png1111} alt="Card 18"/>
                        <p>Join us to increase the visibility of your freight truck business, providing efficient logistics solutions."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png55} alt="Card 19"/>
                        <p>Expand your freight truck business and secure more deliveries by becoming part of our  platform for easier client access."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png1212} alt="Card 20"/>
                        <p>Ambulance services, enhance your reach and responsiveness by featuring on our platform, connecting with those in urgent need."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png1313} alt="Card 21"/>
                        <p>Waste collection truck operators, extend your service reach and connect with communities in need of your waste disposal solutions by featuring on our platform, ensuring efficient and reliable waste collection services."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png1414} alt="Card 22"/>
                        <p>Connect with customers in need of your construction expertise, promoting your services on our  platform to generate leads."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div className="card">
                    <img src={png15} alt="Card 22"/>
                        <p>Firefighters, join our platform to ensure your life-saving services are readily available to the community in emergency situations."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div class="card">
                    <img src={resized} alt="Card 22"/>
                        <p>List your construction equipment inventory to attract project managers and contractors, expanding your rental opportunities."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div class="card">
                    <img src={png17} alt="Card 22"/>
                        <p>Construction professionals, use our platform to showcase your expertise, attracting new clients for your projects."</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div class="card">
                    <img src={png19} alt="Card 22"/>
                        <p>Stay competitive and relevant in the industry. Learn more.</p>
                        <Link to="/register">Learn more</Link>
                </div>
                <div class="card">
                    <img src={png20} alt="Card 22"/>
                        <p>Farm equipment owners, increase your rental business's reach by connecting with farmers in need of your machinery."</p>
                        <Link to="/register">Learn more</Link>
                </div>
            </div>

            <div class="footer">
                &copy; 2023 RoadwayRiders Hub. All rights reserved.
            </div>
        </div>
    );
};

export default Landing;