import React from 'react';
import PropTypes from 'prop-types';

import { Title, Input } from './Filter.styled.js';

const Filter = ({ title, value, onChange }) => {
    return (
      <>
        <Title>{title}</Title>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </>
    );
}
export default Filter;

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};