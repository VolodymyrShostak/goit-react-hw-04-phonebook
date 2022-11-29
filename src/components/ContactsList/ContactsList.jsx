import React from 'react';
import PropTypes from 'prop-types';

import { Button, Contact, ContactList } from './ContactList.styled.js';

const ContactsList = ({ filter, contacts, onDeleteContact }) => {
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <ContactList>
      {visibleContacts.map(({ name, number, id }) => (
        <Contact key={id} id={id}>
          {name}: {number}
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </Contact>
      ))}
    </ContactList>
  );
};
export default ContactsList;

ContactsList.propTypes = {
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool,
    })
  ),
};
