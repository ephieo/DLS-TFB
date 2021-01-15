import React from 'react';
import { Link } from 'react-router-dom';

import {
  QuestionCont,
  Img,
  ImgCont,
  QuestionBtn,
} from './../styled-components/Cards';

import { useAuth } from './../contexts/AuthContext';
import { updateScore } from './../database/queries';

export default function ResultCard({ imgSrc, text }) {
  const { currentUser } = useAuth();

  return (
    <QuestionCont>
      <Img src={imgSrc} />
      <ImgCont background={'#08302e'}>
        {text}
        <br />
        <Link to="/account">
          <QuestionBtn
            onClick={() => {
              updateScore(currentUser.uid);
            }}
            background={'#08302e'}
          >
            Account
          </QuestionBtn>
        </Link>
      </ImgCont>
    </QuestionCont>
  );
}
