import React from 'react';
import { Link } from 'react-router-dom';

import { FlexFooter, ClearText, Icon } from '../styled-components/reusables';
import faq from './../images/faq.svg';
import options from './../images/options.svg';
import account from './../images/account.svg';

export default function Footer() {
  return (
    <FlexFooter>
      <Link style={{ padding: "9px" }} to="/about">
        <Icon src={faq} alt="about" />
        <ClearText color="white">ABOUT</ClearText>
      </Link>
      <Link style={{ padding: "9px" }} to="/options">
        <Icon src={options} alt="options" />
        <ClearText color="white">OPTIONS</ClearText>
      </Link>
      <Link style={{ padding: "9px" }} to="/account">
        <Icon src={account} alt="account" />
        <ClearText color="white">ACCOUNT</ClearText>
      </Link>
    </FlexFooter>
  );
}
