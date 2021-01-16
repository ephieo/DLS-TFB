import React from 'react';

import {
  QuizContainer,
  ImgCont,
  QuestionBtn,
  Img
} from './../styled-components/Cards';


export default function FlashCard({data,question,setToggle,setColour,setAnswer,setWin,colour}) {

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

    //   <QuestionBtn
    //   onClick={correctAnswer}
    //   background={colour}
    //   key={data[question].options.text}
    // >
    //   {e.text}
    // </QuestionBtn>

  return (
    <div>
      <QuizContainer>
        <ImgCont>
        <h1>{data[question].questionNum}</h1>
        <Img src={data[question].image} />
        <ImgCont>
         {data[question].question}
        </ImgCont>
        </ImgCont>
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
      </QuizContainer>

    </div>
  );
}
