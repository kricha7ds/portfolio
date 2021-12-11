import "./contact.scss";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
    const [message, setMessage] = useState(false);
    const API_KEY = process.env.REACT_APP_USER_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;

    const handleSubmit = (e)=>{
        e.preventDefault(); // prevent page refresh on submit
        setMessage(true);
    };

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, API_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        handleSubmit(e);
    };
    
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/handshake.svg" alt="">

                </img>
            </div>
            <div className="right">
                <h2>Contact Me.</h2>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder="Your Email" name="email"/>
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for your message, I will reply shortly!</span>}
                </form>
            </div>
        </div>
    )
}