import React from 'react';
import { Link } from 'react-router-dom';

import { FlexFooter, ClearText } from '../styled-components/reusables';

export default function Footer() {
  return (
    <FlexFooter>
      <Link to="about">
        <ClearText color="white">ABOUT</ClearText>
      </Link>
      <Link to="options">
        <ClearText color="white">OPTIONS</ClearText>
      </Link>
      <Link to="account">
        <ClearText color="white">ACCOUNT</ClearText>
      </Link>
    </FlexFooter>
  );
}
