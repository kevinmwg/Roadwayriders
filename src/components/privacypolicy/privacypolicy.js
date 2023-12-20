import React from 'react';
import './privacypolicy.css'; // Import your CSS file
import png1 from "../../images/3 - Copy.png";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="logo-container">
        <img src={png1} alt="" />
      </div>

      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <p>
          Your privacy is important to us. This Privacy Policy outlines how RoadwayRiders Hub collects
          , uses, and protects your personal information in relation to the services provided.
        </p>
        <h2>1. Information Collection</h2>
        <p>
          We may collect personal information when you register with RoadwayRiders Hub,
           including but not limited to your name, contact information, and business details. We may also collect data related to your usage of our services.
        </p>
        <h2>2. Use of Information</h2>
        <p>
          We use your information to provide and improve our services, 
          connect you with potential clients, and comply with legal requirements.
        </p>
        <h2>3. Information Sharing</h2>
        <p>We may share your information with third parties such as potential clients
           and service providers. Your information may be visible to other registered users of RoadwayRiders Hub.</p>
        <h2>4. Cookies</h2>
        <p>We use cookies to collect data about your interactions with our website
           and improve your experience. You can manage your cookie preferences in your browser settings.</p>
        <h2>5. Changes</h2>
        <p>We may update this Privacy Policy to reflect changes in our practices or for legal reasons.
           Your continued use of our services indicates your acceptance of these changes.</p>
        <h2>6. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please
           <a href="contact.html">contact us</a>.
        </p>
      </div>

      <footer>
        <div className="footer-content">
          <p>&copy; 2023 RoadwayRiders hub</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
