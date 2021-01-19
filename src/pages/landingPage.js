import React from 'react';
import { Link } from 'react-router-dom';
import mobileLife from './../images/MobileLife.svg';
import { MainImg, Button, BtnContainer } from './../styled-components/Landig';

function LandingPage() {

  return (
    <div>
      <MainImg src={mobileLife} alt="Mobile Life"/>
      <BtnContainer>
        <Link to="/signup"><Button type="button" value="Sign Up" /></Link>
        <Link to="/login"><Button type="button" value="Log In" /></Link>
      </BtnContainer>     
    </div>
  );
}

export default LandingPage;
