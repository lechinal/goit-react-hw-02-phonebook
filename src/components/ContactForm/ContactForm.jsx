import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';

export default function ContactForm({ onAddContact, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleAddClick = () => {
    if (name.trim() === '') {
      alert('Please enter the name of the contact!');
      return;
    }

    /* Împiedică utilizatorul să adauge contacte ale căror nume si/sau numere de telefon sunt deja în agenda telefonică.*/
    const existingContact = contacts.find(
      contact => contact.name === name || contact.number === number
    );

    if (existingContact) {
      alert(`"${name}" is already in contacts`);
      return;
    }

    onAddContact(name, number);
    setName('');
    setNumber('');

    const updatedContacts = [...contacts, { name, number }];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <div className={styles.labels}>
      <label>Name</label>
      <input
        className={styles.inputContact}
        type="text"
        value={name}
        onChange={handleNameChange}
        required
      />
      <label>Number</label>
      <input
        className={styles.inputContact}
        type="tel"
        value={number}
        onChange={handleNumberChange}
        required
      />
      <button className={styles.AddContactBtn} onClick={handleAddClick}>
        Add Contact
      </button>
    </div>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
