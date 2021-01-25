import React from 'react';

import {    
  ResultImg,
  ResultCont,
  ResultText
} from './../styled-components/Result';



export default function ResultCard({ imgSrc, text, children }) {
 

  return (
    
      <ResultCont>        
        <ResultImg src={imgSrc} />
        <ResultText>{text}</ResultText>
        {children}        
      </ResultCont>
    
  );
}
