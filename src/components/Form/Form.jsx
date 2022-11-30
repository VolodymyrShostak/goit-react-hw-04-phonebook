import {useState} from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Title, Button, Input } from './Form.styled.js';

export default function Form({onSubmit:onAddContact})  {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
  
  const onHandleChange = e => {
    const { name, value } = e.target;
   
            switch (name) {
      case 'name': setName(value);
        break;
         case 'number': setNumber(value);
        break;
           default: return;
    };
     
  }
const handleSubmit = e => {
  e.preventDefault();
  onAddContact({ name, number, id: nanoid() });
  setName('');
  setNumber('');  
   
  };

  
return (
      <>
        <form onSubmit={handleSubmit}>
          <Title>Name</Title>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onHandleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Title>Number</Title>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={onHandleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit" >
            Add contact
          </Button>
        </form>
      </>
    );
  
    }


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
