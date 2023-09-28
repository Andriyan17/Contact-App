/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, id, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={id}
          onDelete={onDelete}
          {...contact}
        />
      ))}
    </div>
  );
}

export default ContactList;
