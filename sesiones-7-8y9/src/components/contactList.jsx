import React , { useEffect, useState}  from 'react';
import { Contact } from '../models/contact.class';
import ContactComponent from '../components/contact';
import ContactForm from './contactForm';
const ContactList = () => {
  const defaultContact1 = new Contact('Name1', 'LastName1', 'email1', false);
  const defaultContact2 = new Contact('Name2', 'LastName2', 'email2', false);
  const defaultContact3 = new Contact('Name3', 'LastName3', 'email3', false);
  const defaultContact4 = new Contact('Name4', 'LastName4', 'email4', false);
  const defaultContact5 = new Contact('Name5', 'LastName5', 'email5', false);

  const [contacts, setcontact] = useState([defaultContact1,defaultContact2,defaultContact3, defaultContact4,defaultContact5]);
  useEffect(() => {
    console.log('contact state has been modified')
    return () => {
      console.log('contactList component is going to unmount')
    };
  }, [contacts]);
  function handleRemoveContact(contact){
   const  index = contacts.indexOf(contact);
   const  newList = [...contacts]
   newList.splice(index,1);
   setcontact(newList);
  }
  function addContact(contact){
  
    const  newList = [...contacts]
    newList.push(contact);
    setcontact(newList);
  }
  return (
    <div>
      <div>
                <h2> Contacts: </h2>
            </div>
           {contacts.map((contact, index )=>{
            return ( <ContactComponent key={index} contact={contact} handleRemoveContact={handleRemoveContact} /> )
           })}
           <ContactForm add={addContact}/>
    </div>
  );
}

export default ContactList;

    

    


