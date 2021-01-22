import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import MultipleChoice from './MultipleChoicePage';
import FlashCardQuiz from './FlashCardPage';
import { StageBtn } from './../styled-components/reusables';

export default function K3QuizOptionPage() {
  const location = useLocation();
  // const [toggle, setToggle] = useState(false);
  return (
    <div>
      <>
        {!location.pathname.includes('multiple-choice') &&
        !location.pathname.includes('flash-card') ? (
          <>
            <Link to="/k3/quiz-option/multiple-choice">
              <StageBtn>Multiple Choice Quiz</StageBtn>
            </Link>
            <Link to="/k3/quiz-option/flash-card">
              <StageBtn>Flash Cards Quiz </StageBtn>
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
