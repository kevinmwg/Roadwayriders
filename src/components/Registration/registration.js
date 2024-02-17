import React from 'react';
import './registration.css';
// import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import {useNavigate,Link} from "react-router-dom";
const Registration = () => {

    const navigate = useNavigate();
    const [regNumber, setRegNumber] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [vehicleType, setVehicleType] = React.useState("");
    const [serviceOffered, setServiceOffered] = React.useState("");
    const [county, setCounty] = React.useState("");
    const [locality, setLocality] = React.useState("");
    const [termsCheckbox, setTermsCheckbox] = React.useState("");
    const [privacyCheckbox, setPrivacyCheckbox] = React.useState("");
    // const [error, setError] = React.useState("");
    // const [email, setEmail] = React.useState("");
    // const [password, setPassword] = React.useState("");

    // create user with email and password and add the rest to firestore operators

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const auth = getAuth();

            const db = getFirestore();
            // createUserWithEmailAndPassword(auth, email, password)
            //     .then((userCredential) => {
            //         // Signed in
            //         const user = userCredential.user;
            //         console.log(user);
            //         setEmail("");
            //         setPassword("");
            //         navigate("/");
            //     })
            //     .catch((error) => {
            //         const errorCode = error.code;
            //         const errorMessage = error.message;
            //         console.log(errorCode, errorMessage);
            //         setError(errorMessage);
            //         // ..
            //     })


        try {
            // validate phone number and must only contain numbers
            if (phone.length !== 12 || !phone.startsWith("254")) {
                alert("Invalid phone number, must be in international format e.g 254700000000");
                return;
            }

            const response = await fetch("https://msl-fcen.onrender.com/pay", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount: "100",
                    phone
                })
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                alert("Thank you for registering as an operator");
                setPhone("");


            } else {
                console.log("Something went wrong, please try again later");
            }

        } catch (e) {
            console.log(e, termsCheckbox, privacyCheckbox);

        }

            await addDoc(collection(db, "operators"), {
                // email: email,
                regNumber: regNumber,
                phone: phone,
                vehicleType: vehicleType,
                serviceOffered: serviceOffered,
                county: county,
                locality: locality
            })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });


            // clear form and navigate to /login
            setRegNumber("");
            setLocality("");
            setCounty("");
            setServiceOffered("");
            setVehicleType("");
            setPhone("");
            // setEmail("");
            // setPassword("");
            navigate("/landing");

    }


    return (
        <div>
            <h1>Operator Registration</h1>
            <form onSubmit={handleSubmit}>
                {/*<label htmlFor="email">Email:</label>*/}
                {/*<input type="email" id="email" name="email"     onChange={(e) => setEmail(e.target.value)}*/}
                {/*       required/><br/><br/>*/}

                {/*<label htmlFor="password">Password:</label>*/}
                {/*<input type="password" id="password" onChange={(e) => setPassword(e.target.value)}*/}
                {/*       name="password" required/><br/><br/>*/}

                <label htmlFor="regNumber">Vehicle Registration Number:</label>
                <input type="text" id="regNumber" onChange={(e) => setRegNumber(e.target.value)}
                       name="regNumber" required/><br/><br/>

                 <label htmlFor="phone">Operator's Phone Number:</label>
                 <input type="tel" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)}
                           required/><br/><br/>

                        <label htmlFor="vehicleType">Vehicle Type:</label>
                        {/*<select id="vehicleType" name="vehicleType" required>*/}
                        {/*    <option value="Car">Car</option>*/}
                        {/*    <option value="Truck">Truck</option>*/}
                        {/*    <option value="Motorcycle">Motorcycle</option>*/}
                        {/*</select><br/><br/>*/}
                <select id="vehicleType" name="vehicleType" required onChange={(e) => setVehicleType(e.target.value)}
                >
                    <option value="Vehicle Towing Recovery" >Vehicle Towing Recovery</option>
                    <option value="Flatbed Recovery" >Flatbed Recovery</option>
                    <option value="Heavy Duty Recovery" >Heavy Duty Recovery</option>
                    <option value="Tipper" >Tipper</option>
                    <option value="Grab" >Grab</option>
                    <option value="Volumetric" >Volumetric</option>
                    <option value="Hookloader" >Hookloader</option>
                    <option value="Excavator" >Excavator</option>
                    <option value="Grader" >Grader</option>
                    <option value="Dozer" >Skid-steer loader</option>
                    <option value="Bucket Loader" >Bucket loader</option>
                    <option value="back hoe" >back hoe</option>
                    <option value="forklift" >Forklift</option>
                    <option value="Trencher" >Trencher</option>
                    <option value="Concrete mixer" >Concrete mixer</option>
                    <option value="Pickup" >Pickup</option>
                    <option value="Catapiller" >Catapiller</option>
                    <option value="Refrigirator Truck" >Refregirator truck</option>
                    <option value="Movers truck" >Movers truck</option>
                    <option value="Clean water truck" >Clean water truck</option>
                    <option value="Tractor" >Tractor</option>
                    <option value="seeder" >seeder</option>
                    <option value="Combined havester" >conbined havester</option>
                    <option value="Ambulance" >Ambulance</option>
                    <option value="Firefighter" >Firefighter</option>
                    <option value="Waste truck Manager" >Waste truck manager</option>

                    
                </select><br/><br/>


                        <label htmlFor="serviceOffered">Service Offered:</label>
                        <input type="text" id="serviceOffered" name="serviceOffered" onChange={(e) => setServiceOffered(e.target.value)} required/><br/><br/>

                        <label htmlFor="county">County:</label>
                        <input type="text" id="county" name="county" onChange={(e) => setCounty(e.target.value)} required/><br/><br/>

                        <label htmlFor="locality">Locality:</label>
                        <input type="text" id="locality" name="locality" onChange={(e) => setLocality(e.target.value)} required/>

                        <input type="checkbox" id="termsCheckbox" name="termsCheckbox" required
                        onChange={(e) => setTermsCheckbox(e.target.value)}
                                    />
                         <label htmlFor="termsCheckbox">I agree to the <Link to="/termsandcondition">Terms and Conditions</Link></label>

                        <input type="checkbox" id="privacyCheckbox" name="privacyCheckbox" required
                        onChange={(e) => setPrivacyCheckbox(e.target.value)}
                                        />
                        <label for="privacyCheckbox">I accept the <Link to="/privacypolicy">Privacy Policy</Link></label>


                       <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;