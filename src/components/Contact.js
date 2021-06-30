import { useState } from "react"
import "./index.css"

function Contact() {
    const [formObject, setFormObject] = useState()

    // function to set the form object with the user input values

    // function to send message to database

    return (
        <div className="full-height">
            <div className="contact-form">
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Message"></input>
            </div>
        </div>
    )
}

export default Contact