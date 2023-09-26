/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function ContactItemImage({ imageUrl }) {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="profile-image" />
    </div>
  );
}

export default ContactItemImage;
