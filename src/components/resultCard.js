import React from 'react';

import {
  ChoiceCont,
  Img,
  ImgCont
} from './../styled-components/Cards';



export default function ResultCard({ imgSrc, text, children }) {
 

  return (
    <ChoiceCont>
      <Img src={imgSrc} />
      <ImgCont background={'#08302e'}>
        {text}
        {children}        
      </ImgCont>
    </ChoiceCont>
  );
}
