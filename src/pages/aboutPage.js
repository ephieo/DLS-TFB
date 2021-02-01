import React from 'react';

import {
  MainCont,
  AccCard,
  Img,
  Break,
  AboutText
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
          <h3 style={{ marginBottom: "1rem" }}>The Digital Life Skills Company</h3>
          <AboutText>The Digital Life Skills Company is a social enterprise that teaches children and young people how to make sense of the digital information - and misinformation - at their fingertips.</AboutText>        
          <AboutText>Young people are increasingly turning to digital media for their information and yet too many of them are:</AboutText>
          <ul style={{ margin: "0.7rem 0 0 2rem" }}>
            <li>Unable to differentiate fact from fiction online</li>
            <li>Susceptible to hate-fuelled agendas</li>
            <li>Made anxious or scared by false news stories</li>
            <li>Vulnerable to conspiracy theories, scams and hoaxes</li>
            <li>Unable to access reliable information, useful resources or support online.</li>
          </ul>
          <AboutText>Our aim is to give young people the skills they need to effectively evaluate what they see online and avoid being misled.</AboutText>
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
        <h3 style={{ marginBottom: "1rem" }}>Checkify</h3>
        <AboutText>Checkify is a framework developed by the Digital Life Skills Company to help children and young people quickly evaluate the information they see online.  We like to think we are introducing young people to fact-checking the way fact-checkers do it because we know that they are the best when it comes to verifying online content. </AboutText>
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
          <AboutText>Checkify takes young people through an online verification process that, like the fact-checkers, asks three main questions:</AboutText>
          <ol>
            <li>Who is behind this?</li>
            <li>What is the evidence?</li>
            <li>What do other sources say?</li>
          </ol>
          <AboutText>By working their way through the videos and quizzes that address these three questions, users will acquire the skills they need to be discerning when it comes to online misinformation and avoid being misled.</AboutText>
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
