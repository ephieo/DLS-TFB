import React from 'react';
import Footer from './../components/footer';
import {
  FlexHeader,
  Button,
  Logo,
  Card,
  CardCont,
  MainCont,
  OptionsImg,
  ClearText,
} from './../styled-components/reusables';
import logo from './../images/logo.png';
import { Link } from 'react-router-dom';
import quiz from './../images/quiz.svg';
import resources from './../images/resources.svg';
import profile from './../images/profile.svg';
import aboutUs from './../images/about-us.svg';

function OptionsPage() {
  return (
    <MainCont height="170vh">
      <FlexHeader>
        <Link to="/account">
          <Logo src={logo} alt="brand logo" />
        </Link>
        <Button>Options Menu</Button>
      </FlexHeader>
      <CardCont>
        <Link to="quiz-stage">
          <Card>
            <OptionsImg src={quiz} alt="icon for  the link to thequiz page" />
            <ClearText color="#b0c5f8">QUIZZES</ClearText>
          </Card>
        </Link>
        <Link to="resources">
          <Card>
            <OptionsImg
              src={resources}
              alt="icon for  the link to the resources page"
            />
            <ClearText color="#b0c5f8">RESOURCES</ClearText>
          </Card>
        </Link>
        <Link to="about">
          <Card>
            <OptionsImg
              src={aboutUs}
              alt="icon for  the link to the About us page"
              width="30vw"
              mrgbtm="2rem"
            />
            <ClearText color="#b0c5f8">ABOUT US</ClearText>
          </Card>
        </Link>
        <Link to="account">
          <Card>
            <OptionsImg src={profile} alt="icon for  the link to theaccount" />
            <ClearText color="#b0c5f8">ACCOUNT</ClearText>
          </Card>
        </Link>
      </CardCont>
      <Footer />
    </MainCont>
  );
}

export default OptionsPage;
