import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Title, Button, Input } from './Form.styled.js';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
    completed: false,
  };
  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      id: nanoid(),
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <Title>Name</Title>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onHandleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Title>Number</Title>
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onHandleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit" onClick={this.onAddContact}>
            Add contact
          </Button>
        </form>
      </>
    );
  }
}
export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
