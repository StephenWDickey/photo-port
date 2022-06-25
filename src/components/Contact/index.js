import React, {useState} from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {


    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const {name, email, message} = formState;

    // use Hook so we can declare different errors
    const [errorMessage, setErrorMessage] = useState('');

    // create function to trigger re-rendering of component
    function handleChange(e) {

        // incorporate validation, use helper function
        if (e.target.name === 'email') {
            
            // validate the value in the email field
            const isValid = validateEmail(e.target.value);
            

            // if isValid returns false, set error message
            if (!isValid) {

                // this will set the state value of errorMessage
                // by using the setter, setErrorMessage
                setErrorMessage('Your email is invalid.');
            }
            else {
                setErrorMessage('');
            }
        }

        // for the name and message portions of the contact form
        // they must have some length, if not,
        // then we will set the error message 
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            }

            else {
                setErrorMessage('');
            }
        }

        // if there is no errorMessage, i.e. it's an empty string
        // we will trigger the setter function
        if (!errorMessage) {
            // assign formState.name to input field value
            // ...spread operator maintains other key-value pairs in object
            // without it, formState would only have name: value pair
            setFormState({...formState, [e.target.name]: e.target.value });
        }
        
    };


    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


    return (
        <section>
          <h1 data-testid="h1tag">Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5"  defaultValue={message} onBlur={handleChange}/>
            </div>
            { errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button data-testid="button" type="submit">Submit</button>
          </form>
        </section>
    )
}

export default ContactForm;