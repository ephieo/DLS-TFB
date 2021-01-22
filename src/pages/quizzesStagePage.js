import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function QuizPage() {
  return (
    <div>
      <Link to="/k3/quiz-option">
        <div>KEY STAGE 3</div>
      </Link>
      <Link to="/k4/quiz-option">
        <div>KEY STAGE 4</div>
      </Link>
    </div>
  );
}
