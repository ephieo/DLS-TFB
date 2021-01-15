import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import MultipleChoice from './MultipleChoicePage';
import FlashCardQuiz from './FlashCardPage';

export default function QuizOptionPage() {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <>
        {!location.pathname.includes('multiple-choice') &&
        !location.pathname.includes('flash-card') ? (
          <>
            <Link to="/k3/quiz-option/multiple-choice">
              <button>Multiple Choice Quiz</button>
            </Link>
            <Link to="/k3/quiz-option/flash-card">
              <button>Flash Cards Quiz </button>
            </Link>{' '}
          </>
        ) : null}
        {location.pathname.includes('multiple-choice') ? (
          <MultipleChoice />
        ) : null}
        {location.pathname.includes('flash-card') ? <FlashCardQuiz /> : null}
      </>
    </div>
  );
}
