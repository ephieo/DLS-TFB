import React from 'react';

import {  
  QuizContainer,
  ResultImg,
  ResultCont,
  ResultText
} from './../styled-components/Cards';



export default function ResultCard({ imgSrc, text, children }) {
 

  return (
    <QuizContainer>
      <ResultCont>        
      <ResultImg src={imgSrc} />
          <ResultText>{text}</ResultText>
          {children}        
      </ResultCont>
    </QuizContainer>
  );
}
