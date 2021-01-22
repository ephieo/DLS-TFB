import React from 'react';
import { Link } from 'react-router-dom';
import { StageBtn } from './../styled-components/reusables';

export default function QuizPage() {
  return (
    <div>
      <Link to="/k3/quiz-option">
        <StageBtn>KEY STAGE 3</StageBtn>
      </Link>
      <Link to="/k4/quiz-option">
        <StageBtn>KEY STAGE 4</StageBtn>
      </Link>
    </div>
  );
}
