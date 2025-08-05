import React, { useState } from 'react';
import './App.css';
import questions from './questions';

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="container">
      <h1>🧠 React Quiz</h1>

      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-section">
          <h2>Question {current + 1} of {questions.length}</h2>
          <p>{questions[current].question}</p>
          <div className="options">
            {questions[current].options.map((option, idx) => (
              <button key={idx} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
