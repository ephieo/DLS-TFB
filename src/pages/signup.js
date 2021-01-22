import React, { useRef, useState } from 'react';
import { Form, Title, Input, Label, SubmitButton, BtnDisabled, TextBottom } from '../styled-components/Form';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { signupDB } from './../database/queries'

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const userNameRef = useRef();
  //calling and intializing useAuth() to use the signup function to create new users and call
  //the unsubsribe function in the useffect()
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();  

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
      .then(data => signupDB(data.user.uid, data.user.email, userNameRef.current.value));
      history.push('/account');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Title>Sign up</Title>
        <Label htmlFor="userName">Name:</Label>        
        <Input type="text" id="userName" name="userName" ref={userNameRef} required/>
        <Label htmlFor="email">Email:</Label>        
        <Input type="email" id="email" name="email" ref={emailRef} required/>
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
        {error ? <p>{error}</p>: null}
        {!loading ? (
          <SubmitButton type="submit" value="Sign in" />
        ) : (
          <BtnDisabled type="submit" value="Sign in" disabled />
        )}
      <TextBottom> Already have an account ? <Link to="/login" style={{ textDecoration: 'none', color: '#79CF98' }} >LogIn</Link></TextBottom>
      </Form>
      
    </div>
  );
}

export default Signup;
