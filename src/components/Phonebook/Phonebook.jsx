import {useState, useEffect} from 'react';

import Form from './../Form/Form';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import { Wrapper, Title, Subtitle } from './Phonebook.styled.js';

export default function Phonebook () {
  
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
 const onChangeFilter = e => {
    setFilter(e.target.value);
   
  };

  const onAddContact = ({ name, number, id }) => {
    
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }
    setContacts([{ name, number, id }, ...contacts]);
  };
  const onDeleteContact = contId => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contId),
    }));
  };

 
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <Form onSubmit={onAddContact} />
        <Subtitle>Contacts</Subtitle>
        <Filter
          title="Find contacts by name"
          value={filter}
          onChange={onChangeFilter}
        />
        <ContactsList
          contacts={contacts}
          filter={filter}
          onDeleteContact={onDeleteContact}
        />
      </Wrapper>
    );
  }



