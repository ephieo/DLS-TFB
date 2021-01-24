import React from 'react';

import {
  MainCont,
  RsrcImg,
  RsrcCont,
  RsrcText
} from './../styled-components/reusables';

import presentation from './../images/presentation.svg';
import video from './../images/video.svg';
import worksheet from './../images/worksheet.svg';

export default function Resources() {
  return (
    <MainCont width="100%" height="85vh">
        <RsrcCont>
            <RsrcImg src={video} alt="video" />
            <RsrcText>VIDEOS</RsrcText>    
        </RsrcCont>
        <RsrcCont>
            <RsrcImg src={presentation} alt="presentation" />
            <RsrcText>PRESENTATIONS</RsrcText>
        </RsrcCont>
        <RsrcCont>
            <RsrcImg src={worksheet} alt="worksheet" />
            <RsrcText>WORKSHEETS</RsrcText>
        </RsrcCont>
    </MainCont>
  );
}