import React from 'react';
import './privacypolicy.css'; // Import your CSS file


const PrivacyPolicy = () => {
  return (
    <div>
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:21st October 2024</strong></p>
        <p>
          Glalin Technologies (“we,” “our,” “us”) respects your privacy and is committed to protecting your personal data.
          This Privacy Policy applies to the MCK Komarock Academy mobile application (“App”), developed by Glalin Technologies, based in Nairobi, Kenya.
        </p>
        <p>
          This Privacy Policy outlines how we collect, use, and disclose personal information when you use the App.
          It also details the types of data collected by the third-party SDKs integrated into the App, such as the M-PESA API,
          Google Maps, Google Analytics, and Firebase SDK.
        </p>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us via email at <strong>mwongerakevin5@gmail.com</strong>.</p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect the following personal data to ensure the proper functionality of the App and improve the user experience:
        </p>
        <ul>
          <li><strong>Name</strong>: Used for personalized app features.</li>
          <li><strong>Email Address</strong>: Used for communication and notifications.</li>
          <li><strong>Phone Number</strong>: Required for certain app functions, including integration with M-PESA for payment processing.</li>
          <li><strong>Geolocation Data</strong>: Used for location-based services such as school bus tracking powered by Google Maps.</li>
          <li><strong>Device Information</strong>: We collect your device’s IP address, device ID, and usage data to improve our services.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>
          The personal data we collect is used for the following purposes:
        </p>
        <ul>
          <li><strong>App Functionality</strong>: To provide core app features such as M-PESA payments, geolocation services, and personalized content.</li>
          <li><strong>User Communication</strong>: To send notifications, updates, and support messages.</li>
          <li><strong>Analytics and Performance</strong>: To analyze user behavior and improve the App’s performance using services like Google Analytics.</li>
          <li><strong>Geolocation Services</strong>: Location data is used for services like school bus tracking powered by Google Maps.</li>
        </ul>

        <h2>3. Third-Party SDKs and Data Sharing</h2>
        <p>We use third-party SDKs to provide certain functionalities within the App. These SDKs may collect, process, and share user data as outlined below:</p>
        <ul>
          <li><strong>M-PESA API</strong>: Used to process school fee payments. Your phone number is shared with Safaricom for payment validation.</li>
          <li><strong>Google Maps Geolocation</strong>: Provides location-based services. Google may collect your geolocation data to power these services.</li>
          <li><strong>Google Analytics</strong>: Used to collect anonymized usage data, including device information, to analyze app usage patterns.</li>
          <li><strong>Firebase SDK</strong>: Used for authentication, cloud storage, and data synchronization. Firebase collects and stores user authentication data.</li>
        </ul>
        <p>These third-party SDKs operate under their own privacy policies. Please review their policies for more information:</p>
        <ul>
          <li><a href="https://policies.google.com/privacy">Google Play Services Privacy Policy</a></li>
          <li><a href="https://policies.google.com/privacy">Google Maps Privacy Policy</a></li>
          <li><a href="https://firebase.google.com/support/privacy">Google Analytics for Firebase Privacy Policy</a></li>
          <li><a href="https://www.safaricom.co.ke/privacy-statement">Safaricom M-PESA Privacy Policy</a></li>
        </ul>

        <h2>4. Data Sharing</h2>
        <p>
          We do not sell or rent your personal data to third parties. However, we may share your data in the following circumstances:
        </p>
        <ul>
          <li><strong>With Service Providers</strong>: We share data with third-party service providers (e.g., Google, Firebase, Safaricom) to provide services on our behalf.</li>
          <li><strong>Legal Obligations</strong>: We may disclose your data if required by law or to protect our rights and investigate fraud.</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>
          We retain your personal data for as long as you use the App and for a reasonable time thereafter. If you wish to delete your data, contact us at <strong>mwongerakevin5@gmail.com</strong>.
        </p>

        <h2>6. Security</h2>
        <p>
          We employ safeguards to protect your data, but no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
        </p>

        <h2>7. Your Rights and Choices</h2>
        <p>
          You have the following rights regarding your data:
        </p>
        <ul>
          <li><strong>Access</strong>: You can request to view the personal data we have collected.</li>
          <li><strong>Correction</strong>: You may request corrections to any inaccurate data.</li>
          <li><strong>Deletion</strong>: You can request deletion of your personal data.</li>
          <li><strong>Opt-Out</strong>: You can stop all data collection by uninstalling the App from your device.</li>
        </ul>

        <h2>8. Children's Privacy</h2>
        <p>
          The App is not intended for children under 13, and we do not knowingly collect personal information from them. If you are aware of such data collection, please contact us to remove it.
        </p>

        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Any changes will be posted here, and your continued use of the App indicates your acceptance of the revised policy.
        </p>

        <h2>10. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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

