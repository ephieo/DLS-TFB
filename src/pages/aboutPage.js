import React from 'react';

import {
  MainCont,
  AccCard,
  Img,
  Break,
} from './../styled-components/reusables';

import phoneImg1 from './../images/about-us-1.svg';
import phoneImg2 from './../images/about-us-2.svg';
import phoneImg3 from './../images/about-us-3.svg';

export default function AboutUs() {
  return (
    <MainCont margin="2rem 0">
      <MainCont width="100vw" justify="space-around" margin="3rem">
        <AccCard
          background="transparent"
          bdrtop="#70bf81 solid 3px"
          bdrright="#70bf81 solid 3px"
          color="black"
          width="30vw"
          padding="2rem"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </AccCard>
        <Img
          src={phoneImg1}
          alt="illustrations of mobile communication via group chat"
          width="40vw"
        />
      </MainCont>
      <Break />
      <MainCont width="90vw" justify="space-around" margin="3rem">
        <Img
          src={phoneImg2}
          alt="illustrations of mobile communication via group chat"
          width="40vw"
        />
        <AccCard
          background="transparent"
          bdrtop="#70bf81 solid 3px"
          bdrleft="#70bf81 solid 3px"
          color="black"
          width="30vw"
          padding="2rem"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. o
        </AccCard>
      </MainCont>
      <Break skew=" skewY(18deg)" />
      <MainCont width="90vw" justify="space-around" margin="3rem">
        <AccCard
          background="transparent"
          bdrtop="#70bf81 solid 3px"
          bdrright="#70bf81 solid 3px"
          color="black"
          width="30vw"
          padding="2rem"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{' '}
        </AccCard>
        <Img
          src={phoneImg3}
          alt="illustrations of mobile communication via group chat"
          width="40vw"
        />
      </MainCont>
    </MainCont>
  );
}
