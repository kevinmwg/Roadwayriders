import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import resized from "../../images/pngwing.com (3).png";


const TermsAndConditions = () => {
  return (
    <div>
      <div className="logo-container">
        <img src={resized} alt="" />
        </div>
      <div className="terms-container">
        <h2>TERMS AND CONDITIONS</h2>
        <p>Welcome to RoadwayRiders Hub.
           These terms and conditions outline the rules and regulations for the use of our services.</p>
        <h2>1. Registration</h2>
        <p>By registering with RoadwayRiders Hub,
           you agree to provide accurate and complete information.
            You are responsible for maintaining the confidentiality of your account and password.</p>
        <h2>2. Services</h2>
        <p>We provide a platform to connect operators with potential clients.
           RoadwayRiders Hub is not responsible for the quality or accuracy of the services provided by operators.</p>
        <h2>3. Privacy</h2>
        <p>Your privacy is important to us.
           We collect and store your data in accordance with our <a href="privacypolicy.html">Privacy Policy</a>.</p>
        <h2>4. Termination</h2>
        <p>We reserve the right to terminate or suspend your account if you violate these terms 
          and conditions or engage in any fraudulent or harmful activities.</p>
        <h2>5. Changes</h2>
        <p>We may revise and update these terms and conditions.
           Your continued use of our services signifies your acceptance of these changes.</p>
        <h2>6. Contact Us</h2>
        <p>If you have any questions or concerns regarding these terms and conditions, please <a href="contact.html">contact us</a>.</p>
      </div>

      <footer>
        <div className="footer-content">
          <p>&copy; 2023 RoadwayRiders hub</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
