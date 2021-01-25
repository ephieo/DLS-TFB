import React, { useRef, useState } from 'react';
import { FormCont, Form, Title, Input, Label, SubmitButton, BtnDisabled, TextBottom} from '../styled-components/Form';
import {WarningDiv} from '../styled-components/reusables';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { signupDB } from './../database/queries';

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const userNameRef = useRef();
  //calling and intializing useAuth() to use the signup function to create new users and call
  //the unsubsribe function in the useffect()
  const { signup } = useAuth();
  const [errorMess, setErrorMess] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setErrorMess('Passwords do not match');
    }
    try {
      setErrorMess('');
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value
      ).then((data) =>
        signupDB(data.user.uid, data.user.email, userNameRef.current.value)
        )
       history.push('/account')
      } catch (error) {
        setErrorMess(error.message);  
      }
    setLoading(false);
  }

  return (
    <FormCont>
      <Form onSubmit={handleSubmit}>
        <Title>Sign up</Title>
        <Label htmlFor="userName">Name:</Label>
        <Input
          type="text"
          id="userName"
          name="userName"
          ref={userNameRef}
          required
        />
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" ref={emailRef} required />
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
          minLength="7"
          required
        />
        <Label htmlFor="confirmPassword">Password Confirmation:</Label>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          ref={confirmPasswordRef}
          minLength="7"
          required
        />
        
        {errorMess ? <WarningDiv><h1>{errorMess}</h1></WarningDiv> : null}
        
        {!loading ? (
          <SubmitButton type="submit" value="Sign in" />
        ) : (
          <BtnDisabled type="submit" value="Sign in" disabled />
        )}
        <TextBottom>
          {' '}
          Already have an account ?{' '}
          <Link
            to="/login"
            style={{ textDecoration: 'none', color: '#79CF98' }}
          >
            LogIn
          </Link>
        </TextBottom>
      </Form>
      
    </FormCont>
  );
}

export default Signup;
