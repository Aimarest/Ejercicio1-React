import React,{useRef} from 'react';
import { Contact } from '../models/contact.class';
const ContactForm = ({add}) => {
    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');
    const conectRef = useRef('false');
    function addContact(e){
        e.preventDefault();
        const newContact = new Contact
           ( nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            conectRef.current.value,)
            add(newContact)
    }
    return (
        <div>
            <h2>Add new contact</h2>
            <form >
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' required ref={nameRef}></input>
                <label htmlFor='lastName'>LastName</label>
                <input type='text' id='lastName' required ref={lastNameRef}></input>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' required ref={emailRef}></input>
             <button type='submit' onClick={addContact}>add</button>
               
            </form>
        </div>
    );
}

export default ContactForm;
