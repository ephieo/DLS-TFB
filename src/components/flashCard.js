import React from 'react';

import {
  QuizContainer,
  ImgCont,
  QuestionBtn,
  Img,
} from './../styled-components/Cards';
import { MainCont, WhitespaceDiv } from './../styled-components/reusables';

export default function FlashCard({
  data,
  question,
  setToggle,
  setColour,
  setAnswer,
  setWin,
  colour,
}) {
  function correctAnswer(event) {
    const check = data[question].options.filter(
      (e) => e.text === event.target.textContent
    );
    console.log('check', check[0].answer);

    if (check[0].answer === false) {
      setToggle(true);
      setColour('red');
      setAnswer(check[0]);
      setWin(false);
    } else {
      setToggle(true);
      setColour('green');
      setAnswer(check[0]);
    }
  }

  return (
    <MainCont flexdir="column" margin="5rem">
      <MainCont flexdir="column" background="#2b2a2a" bdrradius="20px" mgntop="5rem">
        <QuizContainer>
          <ImgCont>
            <h1>{data[question].questionNum}</h1>
            <Img src={data[question].image} />
            <ImgCont>{data[question].question}</ImgCont>
          </ImgCont>
        </QuizContainer>
        {data[question].options.map((e) => (
          <>
            <QuestionBtn
              onClick={correctAnswer}
              background={colour}
              key={data[question].options.text}
              width="25vw"
            >
              {e.text}
            </QuestionBtn>
            <br />
          </>
        ))}
      </MainCont>
      <WhitespaceDiv/>
    </MainCont>
  );
}
