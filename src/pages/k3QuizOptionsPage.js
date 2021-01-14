import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import MultipleChoice from './MultipleChoicePage';
import FlashCardQuiz from './FlashCardPage';

export default function QuizOptionPage() {
  const location = useLocation();
  return (
    <div>
      <>
        <Link to="/k3/quiz-option/multiple-choice">
          <button>Multiple Choice Quiz</button>
        </Link>
        <Link to="/k3/quiz-option/flash-card">
          <button>Flash Cards Quiz </button>
        </Link>
        {location.pathname.includes('multiple-choice') ? (
          <MultipleChoice />
        ) : null}
        {location.pathname.includes('flash-card') ? <FlashCardQuiz /> : null}
      </>
    </div>
  );
}
