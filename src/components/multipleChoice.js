import React from 'react';

import {
  QuizContainer,
  QuestionText,
  ImgCont,
  ChoiceCont,
  QuestionBtn,
  Img,
} from '../styled-components/Cards';

import { MainCont } from './../styled-components/reusables';

export default function MultipleChoiceCard({
  data,
  colour,
  question,
  setToggle,
  setColour,
  setAnswer,
  setWin,
}) {
  function correctAnswer(event) {
    const check = data[question].options.filter(
      (e) => e.text === event.target.textContent
    );
    console.log('check', check[0].answer);

    if (check[0].answer === false) {
      setToggle(true);
      setColour('#EAD2EF');
      setAnswer(check[0]);
      setWin(false);
    } else {
      setToggle(true);
      setColour('#79CF98');
      setAnswer(check[0]);
    }
  }

  return (
    <>
      <QuizContainer>
        <MainCont
          justify="center"
          background="#2b2a2a"
          border="#2b2a2a"
          bdrradius="20px"
          mobmargin="5rem 0"
          mgntop="5rem"
        >
          <ImgCont>
            <QuestionText>
              <p style={{ textAlign: 'center' }}>
                {data[question].questionNum}. {data[question].question}
              </p>
            </QuestionText>
            <Img src={data[question].image} alt="question img" />
          </ImgCont>
          <ChoiceCont>
            {data[question].options.map((e) => (
              <>
                <QuestionBtn
                  onClick={correctAnswer}
                  background={colour}
                  key={data[question].options.text}
                >
                  {e.text}
                </QuestionBtn>
              </>
            ))}
          </ChoiceCont>
        </MainCont>
      </QuizContainer>
    </>
  );
}
