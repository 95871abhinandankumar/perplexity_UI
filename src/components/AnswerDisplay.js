// src/components/AnswerDisplay.js
import React from 'react';

function AnswerDisplay({ answer, sources }) {
  return (
    <div className="answer">
      <h2>Result:</h2>
      <p>{answer}</p>
      <h3>Sources:</h3>
      <ul>
        {sources.map((source, index) => (
          <li key={index}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnswerDisplay;
