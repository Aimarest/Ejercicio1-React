import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class.js';
import Disponible from './disponible';

const ContactComponent = ({contact, handleRemoveContact}) => {

    return (
        <div>
          <h2>
                Name: {contact.name}
            </h2>
            <h2>
                LastName: {contact.lastName}
            </h2>
            <h3>
                Email: {contact.email}
            </h3>
            <h4>
                This contact is :
            <Disponible conect = {contact.conect}/>
             </h4>
             <i className='bi-trash' onClick={()=>handleRemoveContact(contact)} >Remove contact</i>
        </div>
    );
  
}
  Contact.propTypes = {
        contact: PropTypes.instanceOf(Contact),
        handleRemoveContact: PropTypes.func.isRequired
        };
export default ContactComponent;
