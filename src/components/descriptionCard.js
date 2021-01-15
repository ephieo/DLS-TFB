import React from 'react';
import {
  QuizContainer,
  ImgCont,
  QuestionBtn,
} from './../styled-components/Cards';

export default function DescriptionCard({
  background,
  answerObj,
  question,
  setQuestion,
  setToggle,
  setColour,
}) {
  function nextQuestion() {
    setQuestion((question += 1));
    setToggle(false);
    setColour('transparent');

    console.log(question);
  }
  return (
    <div>
      <QuizContainer background={background} height="40vh">
        {answerObj.answer ? (
          <ImgCont>Correct!</ImgCont>
        ) : (
          <ImgCont>Incorrect!</ImgCont>
        )}
        <ImgCont>{answerObj.description}</ImgCont>
        <QuestionBtn onClick={nextQuestion}>Next</QuestionBtn>
      </QuizContainer>
    </div>
  );
}
