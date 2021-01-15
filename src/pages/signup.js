import React, { useRef, useState } from 'react';
import { Form, Input, Label, SubmitButton } from '../styled-components/Form';
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
      <h1>Sign up</h1>
      {error ? alert(error) : null}
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="userName">Name:</Label>
        <br />
        <Input type="text" id="userName" name="userName" ref={userNameRef} required/>
        <Label htmlFor="email">Email:</Label>
        <br />
        <Input type="email" id="email" name="email" ref={emailRef} required/>
        <Label htmlFor="email">Password:</Label>
        <br />
        <Input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
          minLength="7"
          required
        />
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          ref={confirmPasswordRef}
          minLength="7"
          required
        />
        {!loading ? (
          <SubmitButton type="submit" />
        ) : (
          <button>Loading...</button>
        )}
      </Form>
      <h1> Already have an account ? </h1>
      <Link to="/login">
        <button>LogIn</button>
      </Link>
    </div>
  );
}

export default Signup;
