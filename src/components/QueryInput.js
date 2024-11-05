// src/components/QueryInput.js
import React, { useState } from 'react';

function QueryInput({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery(''); // Clear the input after submission
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your question"
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default QueryInput;
