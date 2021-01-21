import React from 'react';

import { AccBox } from './../styled-components/reusables';

export default function AccountBox({ nameInput, emailInput, scoreInput }) {
  return (
    <>
      <h3>Name</h3>
      <AccBox>{nameInput}</AccBox>
      <h3>Email</h3>
      <AccBox>{emailInput}</AccBox>
      <h3>Score</h3>
      <AccBox>{scoreInput}</AccBox>
    </>
  );
}
