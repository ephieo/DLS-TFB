import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import MultipleChoice from './MultipleChoicePage';
import FlashCardQuiz from './FlashCardPage';
import { StageBtn } from './../styled-components/reusables';

export default function K4QuizOptionPage() {
  const location = useLocation();
  return (
    <div>
      <>
        {!location.pathname.includes('multiple-choice') &&
        !location.pathname.includes('flash-card') ? (
          <>
            <Link to="/quiz-stage">
              <StageBtn>Multiple Choice Quiz</StageBtn>
            </Link>
            <Link to="/quiz-stage">
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
