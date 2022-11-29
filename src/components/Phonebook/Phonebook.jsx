import React from 'react';

import Form from './../Form/Form';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import { Wrapper, Title, Subtitle } from './Phonebook.styled.js';

class Phonebook extends React.Component {
  state = {
    contacts: [
      {
        id: 'id-1',
        name: 'Rosie Simpson',
        number: '459-12-56',
        completed: false,
      },
      {
        id: 'id-2',
        name: 'Hermione Kline',
        number: '443-89-12',
        completed: false,
      },
      {
        id: 'id-3',
        name: 'Eden Clements',
        number: '645-17-79',
        completed: false,
      },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        number: '227-91-26',
        completed: false,
      },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (!parsedContacts) {
      return;
    }
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  onChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  onAddContact = ({ name, number, id }) => {
    const { contacts } = this.state;
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }
    this.setState({
      contacts: [{ name, number, id }, ...contacts],
    });
  };
  onDeleteContact = contId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <Form onSubmit={this.onAddContact} />
        <Subtitle>Contacts</Subtitle>
        <Filter
          title="Find contacts by name"
          value={filter}
          onChange={this.onChangeFilter}
        />
        <ContactsList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.onDeleteContact}
        />
      </Wrapper>
    );
  }
}
export default Phonebook;
