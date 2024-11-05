import React, { useState } from 'react';
import QueryInput from './components/QueryInput';
import AnswerDisplay from './components/AnswerDisplay';
import ErrorDisplay from './components/ErrorDisplay';
import './App.css';
function App() {
  const [answer, setAnswer] = useState(null);
  const [sources, setSources] = useState([]);
  const [error, setError] = useState(null);

  const handleQuerySubmit = async (query) => {
    setAnswer(null);
    setSources([]);
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/query/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Failed to retrieve results. Please try again.');
      }

      const data = await response.json();
      setAnswer(data.answer);
      setSources(data.sources);
    } catch (err) {
      setError('Failed to retrieve results. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1 className="project-name">Mini Perplexity Q&A</h1>
      <div className="chat">
        <QueryInput onSubmit={handleQuerySubmit} />
        {error && <ErrorDisplay message={error} />}
        {answer && <AnswerDisplay answer={answer} sources={sources} />}
      </div>
    </div>
  );
}

export default App;