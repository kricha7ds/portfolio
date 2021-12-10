import "./contact.scss";
import { useState } from "react";

export default function Contact() {
    const [message, setMessage] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault(); // prevent page refresh on submit
        setMessage(true);
    };

    // Input Field handler
    const handleUserInput = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };

    // Reset input fields handler
    const resetInputFields = (e)=>{
        e.preventDefault();
        setInputValue("");
    };
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/handshake.svg" alt="">

                </img>
            </div>
            <div className="right">
                <h2>Contact Me.</h2>
                <form onSubmit={handleSubmit, resetInputFields}>
                    <input type="text" placeholder="Email" value={inputValue} onChange={handleUserInput}/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for your message, I will reply shortly!</span>}
                </form>
            </div>
        </div>
    )
}