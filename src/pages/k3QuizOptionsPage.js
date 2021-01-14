import React from 'react';
import { useHistory } from 'react-router-dom';

export default function QuizOptionPage() {
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <button>Multiple Choice Quiz</button>
      <h1>hello</h1>

      <button>Flash Cards Quiz </button>
    </div>
  );
}

//quizPge
//k3:quiz-option
//k3:multiple choice
//k3:flash-card
