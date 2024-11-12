import React from 'react';
import './privacypolicy.css';

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date: [Date of Publication]</strong></p>
        <p>
          Glalin Technologies (“we,” “our,” “us”) respects your privacy and is committed to protecting your personal data. This Privacy Policy applies to the Nanyuki Methodist mobile application (“App”), developed by Glalin Technologies, based in Nairobi, Kenya.
        </p>
        <p>
          This Privacy Policy outlines our data collection, use, and disclosure practices, specifically regarding our use of Firebase Firestore and Google Analytics SDK as third-party services for data storage, synchronization, and analytics.
        </p>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at <strong>mwongerakevin5@gmail.com</strong>.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following data to enable app functionality and improve the user experience:</p>
        <ul>
          <li><strong>Name</strong>: Used to personalize app features.</li>
          <li><strong>Email Address</strong>: Used for communication and notifications within the app.</li>
          <li><strong>Device Information</strong>: Collects information such as IP address and device type for performance monitoring, analytics, and security purposes.</li>
          <li><strong>Phone Number</strong>: Used for communication and notification within the app. </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use personal data for the following purposes:</p>
        <ul>
          <li><strong>App Functionality</strong>: Ensuring the app’s core features operate effectively, including personalized content.</li>
          <li><strong>Communication</strong>: Sending notifications and updates relevant to users.</li>
          <li><strong>Analytics and Performance Monitoring</strong>: Collecting device data and user interaction insights to improve app performance, stability, and usability.</li>
        </ul>

        <h2>3. Third-Party SDKs and Data Sharing</h2>
        <p>We use Firebase Firestore and Google Analytics SDK to manage data and analyze app usage:</p>
        <ul>
          <li><strong>Firebase Firestore</strong>: Stores user information securely, helping us manage data synchronization and app performance. View <a href="https://firebase.google.com/support/privacy">Firebase Privacy Policy</a>.</li>
          <li><strong>Google Analytics SDK</strong>: Collects anonymized data on app usage, device type, and engagement patterns to help us understand how users interact with the app and improve user experience. View <a href="https://firebase.google.com/support/privacy">Google Analytics for Firebase Privacy Policy</a>.</li>
        </ul>

        <h2>4. Data Sharing</h2>
        <p>We do not sell or rent your personal data. However, we may share data under the following circumstances:</p>
        <ul>
          <li><strong>Service Providers</strong>: We use Firebase and Google Analytics as secure data management and analytics providers, who may receive relevant data in the course of app operations.</li>
          <li><strong>Legal Obligations</strong>: We may disclose data if required by law or to protect our rights and interests.</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>Data is retained as long as you use the App and for a reasonable period thereafter. Contact <strong>mwongerakevin5@gmail.com</strong> if you wish to request deletion of your data.</p>

        <h2>6. Security</h2>
        <p>We employ security safeguards to protect your data, though no method is 100% secure. We strive to maintain secure measures but cannot guarantee absolute security.</p>

        <h2>7. Your Rights and Choices</h2>
        <ul>
          <li><strong>Access</strong>: You may request access to the personal data we hold about you.</li>
          <li><strong>Correction</strong>: You can request corrections to your personal information if it is inaccurate or incomplete.</li>
          <li><strong>Deletion</strong>: You may request the deletion of your data by contacting us.</li>
          <li><strong>Opt-Out</strong>: To stop data collection, you may uninstall the App at any time.</li>
        </ul>

        <h2>8. Children's Privacy</h2>
        <p>The App is not intended for children under the age of 13, and we do not knowingly collect data from them. If we become aware of such data collection, we will promptly delete it.</p>

        <h2>9. Compliance with Google Play Data Safety Requirements</h2>
        <p>Our data practices align with Google Play’s Data Safety requirements, and the information disclosed in this Privacy Policy accurately reflects data handling, collection, and sharing.</p>

        <h2>10. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy periodically. Continued use of the App signifies acceptance of any changes made.</p>

        <h2>11. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at:</p>
        <p><strong>Glalin Technologies</strong></p>
        <p>Nairobi, Kenya</p>
        <p>Email: <strong>mwongerakevin5@gmail.com</strong></p>
      </div>

      <footer>
        <div className="footer-content">
          <p>&copy; 2024 Nanyuki Methodist</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
