import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './../contexts/AuthContext';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import { Button, MainCont, CardCont } from './../styled-components/reusables';

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
    <MainCont>
      <CardCont height="120vh" mrgtop="20vh">
        <CardCont>
          <h1>Account Page</h1>
          {error ? alert(error) : null}
          <h3>{currentUser ? currentUser.email : <p>No user signed in:</p>}</h3>
          <Link to="account-update">
            <button>Update Profile</button>
          </Link>
          <Button onClick={handleLogout}>LOGOUT</Button>
        </CardCont>
      </CardCont>
      <Footer />
    </MainCont>
  );
}

export default AccountPage;
