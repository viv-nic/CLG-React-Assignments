// import { style } from "@mui/system";
import { useState } from "react";
import FormMessaging from "./formMessaging";

const options = [
    "Design & Branding",
    "Web and App Development",
    "Cloud and API Consultancy",
    "Brand Strategy",
    "Just want to say Hi",
    "Market and Ads"
];

function EnquireForm () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedService, setSelectedService] =  useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);
    const [isValid, setIsValid] =useState(false);

    function validateForm() {
        
        const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        if (!email.match(emailRegex) || email.length < 3 || name.length < 1) {
            // console.log("invalid");
            setIsValid(false);
        } else {setIsValid(true);
        }
    }

    return (
        <div>
            <h2>Let's keep in touch!</h2>
            <label for="name">
                 Name 
                <input type="text" id="name" placeholder="Your Name.." onChange={(e) => setName(e.target.value)} />
            </label>
                    
            <label for="email">
                Email 
                <input type="text" id="email" placeholder="Your Email.." onChange={(e) => setEmail(e.target.value)} />
            </label>
                    
            <div>
                <label for="services">
                    What would you like to chat about?
                </label><br></br>
                <select id="services"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}>
                        <option disabled={true} value="">
                            --Choose an option--
                        </option>
                        {options.map((option, id) => (
                            <option value={option} key={`${id}-${option}`}>
                                {option}
                            </option>
                        ))}
                </select>
            </div>
            <div>
                <label>
                    Message
                </label><br></br>
                <textarea 
                    name="Message"
                    cols="40"
                    rows="5"
                    onChange={(e) => setMessage(e.target.value)}>

                </textarea>
            </div>

            <button 
           
            type="button"
            onClick={() => {
                validateForm();
                setIsSubmitted(true);
                console.log({name, email, selectedService, message});
            }} >
                Submit
            </button>
              
            {isSubmitted && isSuccess && isValid && (
                <FormMessaging
                isError
                content="Thanks for your details, we'll be in touch!"/>
            )}

            {isSubmitted && !isValid && (
                <FormMessaging
                isError={false}
                content="Oops, something went wrong, please try again later."/>
            )}

            {!isSubmitted && !isValid && (
                <FormMessaging
                isError
                content="Please fill in the form"/>
            )}
            
        </div>
    )

}

export default EnquireForm;