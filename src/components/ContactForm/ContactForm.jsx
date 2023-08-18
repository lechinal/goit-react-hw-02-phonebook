import React, { useState } from 'react';

export default function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleAddClick = () => {
    if (name.trim() === '' || number.trim() === '') return;

    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleNameChange} required />
      <label>Number:</label>
      <input type="tel" value={number} onChange={handleNumberChange} required />
      <button onClick={handleAddClick}>Add Contact</button>
    </div>
  );
}
