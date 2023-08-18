import React from 'react';
import styles from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li className={styles.contactList} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={styles.btnList}
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
