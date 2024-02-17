import React from 'react';


const Donate = () => {

    const [amount, setAmount] = React.useState("");
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");

    // submit form to post request using fetch to url https://msl-fcen.onrender.com . also validate that number starts with 254 and is 12 digits long
    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log("submitting");
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
                    amount,
                    phone
                })
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                    alert("Thank you for donating");
                    setAmount("");
                    setName("");
                    setPhone("");


            } else {
                console.log("Something went wrong, please try again later");
            }

        } catch (e) {
            console.log(e, name);

        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="amount" style={{color: "black"}}>Amount</label>
                <input type="text" style={{color: "black"}} id="amount" name="amount" onChange={(e) => setAmount(e.target.value)}
                          /><br/><br/>
                <label htmlFor="name" style={{
                    color: "black"
                }}>Name</label>
                <input type="text" style={{color: "black"}} id="name" name="name" onChange={(e) => setName(e.target.value)}
                            required/><br/><br/>
                <label htmlFor="phone" style={{color: "black"}}>Phone</label>
                <input type="text" style={{color: "black"}} id="phone" placeholder="254700000000" name="phone" onChange={(e) => setPhone(e.target.value)}
                            required/><br/><br/>
                <button type="submit">Donate</button>
            </form>
        </div>
    );
};

export default Donate;