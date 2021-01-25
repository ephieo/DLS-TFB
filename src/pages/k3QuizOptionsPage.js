import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import MultipleChoice from './MultipleChoicePage';
import FlashCardQuiz from './FlashCardPage';
import { StageBtn, MainCont } from './../styled-components/reusables';

export default function K3QuizOptionPage() {
  const location = useLocation();
  // const [toggle, setToggle] = useState(false);
  return (
    <div>
      <>
        {!location.pathname.includes('multiple-choice') &&
        !location.pathname.includes('flash-card') ? (
          <MainCont height="78vh" >
            <Link to="/k3/quiz-option/multiple-choice">
              <StageBtn
                boxShad="15px -15px #70bf81, -15px 15px #70bf81, 0 0 #70bf81"
                mobBoxShad="5px -5px #70bf81, -5px 5px #70bf81, 0 0 #70bf81"
                color="#70bf81"
              >
                Multiple Choice Quiz
              </StageBtn>
            </Link>
            <Link to="/k3/quiz-option/flash-card">
              <StageBtn
                boxShad="15px -15px #70bf81, -15px 15px #70bf81, 0 0 #70bf81"
                mobBoxShad="5px -5px #70bf81, -5px 5px #70bf81, 0 0 #70bf81"
                color="#70bf81"
              >
                Flash Cards Quiz{' '}
              </StageBtn>
            </Link>{' '}
          </MainCont>
        ) : null}
        {location.pathname.includes('multiple-choice') ? (
          <MultipleChoice />
        ) : null}
        {location.pathname.includes('flash-card') ? <FlashCardQuiz /> : null}
      </>
    </div>
  );
}
