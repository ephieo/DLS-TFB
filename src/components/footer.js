import React from 'react';
import { Link } from 'react-router-dom';

import { FlexFooter, ClearText, Icon, ItemCont } from '../styled-components/Footer';
import faq from './../images/faq.svg';
import options from './../images/options.svg';
import account from './../images/account.svg';

export default function Footer() {
  return (
    <FlexFooter>
      <Link style={{ padding: "9px" }} to="/about">
        <ItemCont>
          <Icon src={faq} alt="about" />
          <ClearText color="#495963">ABOUT</ClearText>
        </ItemCont>
      </Link>
      <Link style={{ padding: "9px" }} to="/options">
        <ItemCont>
          <Icon src={options} alt="options" />
          <ClearText color="#495963">OPTIONS</ClearText>
        </ItemCont>
      </Link>
      <Link style={{ padding: "9px" }} to="/account">
        <ItemCont>
          <Icon src={account} alt="account" />
          <ClearText color="#495963">ACCOUNT</ClearText>
        </ItemCont>
      </Link>
    </FlexFooter>
  );
}
