import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './../contexts/AuthContext';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import {
  Button,
  MainCont,
  AccCard,
  Img,
} from './../styled-components/reusables';
import accountImg from './../images/account-img.svg';
import AccountBox from './../components/accountBox';

function AccountPage() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/');
    } catch {}
  }
  return (
    <MainCont width="100vw">
      <MainCont margin=" 4rem 0">
        <Img
          src={accountImg}
          alt="illustration of a community of people"
          width="55vw"
        />
        <AccCard padding="1rem" border="#b0c5f8 solid 3px">
          <AccountBox
            nameInput="name"
            emailInput={
              currentUser ? currentUser.email : <p>No user signed in:</p>
            }
            scoreInput="300"
          ></AccountBox>
          {error ? alert(error) : null}
          <Link to="account-update">
            <Button
              background="#b0c5f8"
              border="#b0c5f8 solid 3px"
              padding="0.5rem 0.35rem"
              margin="0.5rem"
            >
              Update Profile
            </Button>
          </Link>
          <Button
            background="#b0c5f8"
            border="#b0c5f8 solid 3px"
            onClick={handleLogout}
            padding="0.5rem 0.35rem"
            margin="0.5rem"
          >
            LOGOUT
          </Button>
        </AccCard>
      </MainCont>
      <Footer />
    </MainCont>
  );
}

export default AccountPage;
