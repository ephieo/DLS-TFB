import React from 'react';

import {
    QuizContainer,
    ImgCont,
    QuestionCont,
    QuestionBtn,
    Img,
  } from '../styled-components/Cards';



export default function MultipleChoiceCard({data, colour,question,setToggle,setColour,setAnswer, setWin}) {

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
        <div>
             <QuizContainer>
              <ImgCont>
                <ImgCont width="100%" height="10%">
                  {data[question].question}
                </ImgCont>
                <Img src={data[question].image} alt="question img" />
              </ImgCont>
              <QuestionCont>
                {data[question].options.map((e) => (
                  <>
                    <QuestionBtn
                      onClick={correctAnswer}
                      background={colour}
                      key={data[question].options.text}
                    >
                      {e.text}
                    </QuestionBtn>
                    <br />
                  </>
                ))}
              </QuestionCont>
            </QuizContainer>
        </div>
    )
}
