import React from 'react';
import { Link } from 'react-router-dom';
import { StageBtn, MainCont } from './../styled-components/reusables';

export default function QuizPage() {
  return (
    <MainCont height="78vh">
      <Link to="/k3/quiz-option">
        <StageBtn
          boxShad="15px -15px #576482, -15px 15px #576482, 0 0 #576482"
          mobBoxShad="5px -5px #576482, -5px 5px #576482, 0 0 #576482"
          color="#576482"
        >
          KEY STAGE 3
        </StageBtn>
      </Link>
      <Link to="/k4/quiz-option">
        <StageBtn
          boxShad="15px -15px #576482, -15px 15px #576482, 0 0 #576482"
          mobBoxShad="5px -5px #576482, -5px 5px #576482, 0 0 #576482"
          color="#576482"
        >
          KEY STAGE 4
        </StageBtn>
      </Link>
    </MainCont>
  );
}
