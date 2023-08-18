import React from 'react';
import styles from './Filter.module.css';

export default function Filter({ filter, onFilterChange }) {
  return (
    <div className={styles.filter}>
      <label>Find contacts by name</label>
      <input
        className={styles.inputFilter}
        type="text"
        value={filter}
        onChange={event => onFilterChange(event.target.value)}
      />
    </div>
  );
}
