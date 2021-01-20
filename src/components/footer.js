import React from 'react';
import { Link } from 'react-router-dom';

import { FlexFooter, ClearText } from '../styled-components/reusables';

export default function Footer({ onClickFunc }) {
  return (
    <FlexFooter>
      <Link to="about">
        <ClearText color="#495963">ABOUT</ClearText>
      </Link>
      <Link to="options">
        <ClearText color="#495963">OPTIONS</ClearText>
      </Link>
      <Link to="account">
        <ClearText color="#495963">ACCOUNT</ClearText>
      </Link>
    </FlexFooter>
  );
}
