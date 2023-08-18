import React from 'react';

export default function Filter({ filter, onFilterChange }) {
  return (
    <div>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={event => onFilterChange(event.target.value)}
      />
    </div>
  );
}
