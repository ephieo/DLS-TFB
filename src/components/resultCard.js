import React from 'react';

import {
  QuestionCont,
  Img,
  ImgCont
} from './../styled-components/Cards';



export default function ResultCard({ imgSrc, text, children }) {
 

  return (
    <QuestionCont>
      <Img src={imgSrc} />
      <ImgCont background={'#08302e'}>
        {text}
        {children}
        <br />
      </ImgCont>
    </QuestionCont>
  );
}
