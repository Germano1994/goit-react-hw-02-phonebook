import React from 'react';

const ContactListItem = ({ name, number }) => (
  <li>
    {name}: {number}
  </li>
);

export default ContactListItem;
