import React from 'react';
import './privacypolicy.css';

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date: 25th October 2024</strong></p>
        <p>
          Glalin Technologies (“we,” “our,” “us”) respects your privacy and is committed to protecting your personal data. This Privacy Policy applies to the MCK Komarock Academy mobile application (“App”), developed by Glalin Technologies, based in Nairobi, Kenya.
        </p>
        <p>
          This Privacy Policy outlines our data collection, use, and disclosure practices, including third-party SDKs and services that may collect and transmit data off the device, like the M-PESA API, Google Maps, Google Analytics, and Firebase.
        </p>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at <strong>mwongerakevin5@gmail.com</strong>.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following data to ensure functionality and improve the user experience:</p>
        <ul>
          <li><strong>Name</strong>: Used for personalized app features.</li>
          <li><strong>Email Address</strong>: Used for communication and notifications.</li>
          <li><strong>Phone Number</strong>: Required for app functions, including integration with M-PESA for payment processing.</li>
          <li><strong>Geolocation Data</strong>: Used for location-based services like school bus tracking via Google Maps.</li>
          <li><strong>Device Information</strong>: IP address, device ID, and usage data collected for analytics and service improvement.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use personal data for the following purposes:</p>
        <ul>
          <li><strong>App Functionality</strong>: Core app features, payments, geolocation, and personalized content.</li>
          <li><strong>Communication</strong>: Sending notifications and updates.</li>
          <li><strong>Analytics and Performance</strong>: User behavior analysis and app performance improvements using Google Analytics.</li>
          <li><strong>Geolocation Services</strong>: Location data for school bus tracking via Google Maps.</li>
        </ul>

        <h2>3. Third-Party SDKs and Data Sharing</h2>
        <p>We use third-party SDKs that may collect and process user data. The data collected and shared by these SDKs includes:</p>
        <ul>
          <li><strong>M-PESA API</strong>: For school fee payments. Your phone number and transaction details are shared with Safaricom for payment processing. View <a href="https://www.safaricom.co.ke/privacy-statement">Safaricom M-PESA Privacy Policy</a>.</li>
          <li><strong>Google Maps Geolocation</strong>: Provides location-based services; Google may collect your geolocation data. View <a href="https://policies.google.com/privacy">Google Maps Privacy Policy</a>.</li>
          <li><strong>Google Analytics</strong>: Collects anonymized usage data (device information) to analyze app usage patterns. View <a href="https://firebase.google.com/support/privacy">Google Analytics for Firebase Privacy Policy</a>.</li>
          <li><strong>Firebase SDK</strong>: Manages authentication, data synchronization, and cloud storage. Firebase collects user authentication data. View <a href="https://firebase.google.com/support/privacy">Firebase Privacy Policy</a>.</li>
        </ul>

        <h2>4. Data Sharing</h2>
        <p>We do not sell or rent your personal data. However, we may share data under the following circumstances:</p>
        <ul>
          <li><strong>Service Providers</strong>: Data is shared with third-party providers (Google, Firebase, Safaricom) to provide our services.</li>
          <li><strong>Legal Obligations</strong>: We may disclose data if required by law or to protect our rights.</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>Data is retained as long as you use the App and for a reasonable period thereafter. Contact <strong>mwongerakevin5@gmail.com</strong> for deletion requests.</p>

        <h2>6. Security</h2>
        <p>We employ security safeguards to protect your data, but no method is 100% secure. We cannot guarantee absolute security.</p>

        <h2>7. Your Rights and Choices</h2>
        <ul>
          <li><strong>Access</strong>: Request access to personal data.</li>
          <li><strong>Correction</strong>: Request corrections to inaccurate data.</li>
          <li><strong>Deletion</strong>: Request deletion of your data.</li>
          <li><strong>Opt-Out</strong>: Uninstall the App to stop data collection.</li>
        </ul>

        <h2>8. Children's Privacy</h2>
        <p>The App is not for children under 13, and we do not knowingly collect data from them. Contact us to delete such data if identified.</p>

        <h2>9. Compliance with Google Play Data Safety Requirements</h2>
        <p>Our App’s data practices match the disclosures made in Google Play's Data Safety section, including third-party SDK data handling. The data disclosed accurately reflects the information collected, shared, and processed both by us and third-party services.</p>

        <h2>10. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy periodically. Continued use of the App indicates acceptance of any changes.</p>

        <h2>11. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at:</p>
        <p><strong>Glalin Technologies</strong></p>
        <p>By Glalin Technologies</p>
        <p>Nairobi, Kenya</p>
        <p>Email: <strong>mwongerakevin5@gmail.com</strong></p>
      </div>

      <footer>
        <div className="footer-content">
          <p>&copy; 2024 MCK Komarock Academy</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;


