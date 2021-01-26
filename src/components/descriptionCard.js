import React from 'react';
import correct from './../images/correct.svg';
import incorrect from './../images/incorrect.svg';
import {
  QuizContainer,  
  NextBtn,
  DscCont,
  ContentCont,
  Heading,
  Description
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
      <QuizContainer style={{ height: "80vh"}}>
        <DscCont style={{backgroundColor: "transparent"}}>
          <ContentCont>{answerObj.answer ? (<img src={correct} alt="correct" />):(<img src={incorrect} alt="incorrect" />)}</ContentCont>
          <ContentCont>
            {answerObj.answer ? (
              <Heading>Correct!</Heading>
            ) : (
              <Heading>Incorrect!</Heading>
            )}
            <Description>{answerObj.description}</Description>
            <NextBtn onClick={nextQuestion}>Next >></NextBtn>
          </ContentCont>
        </DscCont>
      </QuizContainer>
    </div>
  );
}
