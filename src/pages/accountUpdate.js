import React, { useRef, useState } from 'react';
import { Form, Title, Input, Label, SubmitButton, BtnDisabled, TextBottom } from '../styled-components/Form';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function AccountUpdate() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }

    const promises = [];

    setLoading(true);
    setError('');

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push('/account');
      })
      .catch(() => {
        setError('Failed to update account');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      {error ? alert(error) : null}
      <Form onSubmit={handleSubmit}>
        <Title>Update</Title>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          ref={emailRef}
          defaultValue={currentUser.email}
        />
        <Label htmlFor="password">Password:</Label>        
        <Input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
          minLength="7"
          placeholder="If keeping password leave this space blank"
        />
        <Label htmlFor="confirmPassword">Password Confirmation:</Label> 
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          ref={confirmPasswordRef}
          minLength="7"
          placeholder="If keeping password leave this space blank"
        />
        {!loading ? (
          <SubmitButton type="submit" value="Update" />
        ) : (
          <BtnDisabled type="submit" value="Update" disabled />
        )}
        <TextBottom>Don't wnat to update? <Link to="/account" style={{ textDecoration: 'none', color: '#79CF98' }} >Go back to Account</Link></TextBottom>
      </Form>      
    </div>
  );
}

export default AccountUpdate;
