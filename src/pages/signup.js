import React, { useRef, useState } from 'react';
import { Form, Input, Label, SubmitButton } from './../components/Form';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  //calling and intializing useAuth() to use the signup function to create new users and call 
  //the unsubsribe function in the useffect()
  const {signup, currentUser} = useAuth();
  const [ error, setError ] = useState('')
  const [ loading, setLoading ] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if(passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match')
    }
    try{
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      
      setError('Failed to create an account');
    }
    setLoading(false)
  }
  
  return (
    <div>
      <h1>Sign up</h1>
      {currentUser ? JSON.stringify(currentUser.email): <h1>no users yet</h1>}
      {error? alert(error): null}
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email:</Label>
        <br />
        <Input type="email" id="email" name="email" ref={emailRef} />
        <Label htmlFor="email">Password:</Label>
        <br />
        <Input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
        />
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          ref={confirmPasswordRef}
        />
        {!loading ?  <SubmitButton type="submit" /> : <button>Loading...</button>}
      
      </Form>
      <h1> Already have an account ? </h1>
      <Link to="/login">
        <button>LogIn</button>
      </Link>
    </div>
  );
}

export default Signup;
