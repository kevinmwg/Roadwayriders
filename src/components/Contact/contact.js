import React, {useRef} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import emailjs from 'emailjs-com';

const Contact = () => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const templateId = "template_qz3stzo";
    const serviceId = "service_4puad1f";
    const userId = "u3LTN4WYvKzHfYgur";


    const form = useRef();
    const handleSubmit = async(e) => {
        e.preventDefault();
        emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            userId
        ).then((result) => {
                console.log(result.text);
                // show success message
                const successMessage = document.querySelector(".getintouch");
                successMessage.style.display = "block";
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
                // clear form
                setName("");
                setEmail("");
                setMessage("");

            }
        ).catch((error) => {
            console.log(error.text, email, name, message);
        });
    }


    return (
        <div>
            <div className="background-image"></div>
            <header>
                <h1>Contact Us</h1>
            </header>
            <nav>
                <ul>
                </ul>
            </nav>
            <main>
                <section>
                    <h2>Contact Information</h2>
                    <address>
                        <p>Nairobi, 00100</p>
                        <p>Email: <a href="mailto:mukariakelvin48@gmail.com">mukariakelvin48@gmail.com</a></p>
                        <p>Phone: <a href="tel:+254701562015">254701562015</a></p>
                    </address>
                </section>
                <section>
                    <h2>Contact Form</h2>
                    <form onSubmit={handleSubmit} ref={form}
                    >
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="from_name" required onChange={(e) => setName(e.target.value)}
                        />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="to_email" required onChange={(e) => setEmail(e.target.value)}
                            />

                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows="4" required onChange={(e) => setMessage(e.target.value)}
                                ></textarea>

                                <input type="submit" value="Submit"/>
                    {/*    success message*/}
                        <p className="getintouch" style={{
                            display: "none",
                        }}>Thank you for getting in touch!</p>
                    </form>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 RoadwayRiders Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Contact;