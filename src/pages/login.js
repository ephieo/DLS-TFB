import React, { useRef, useState } from 'react';
import { Form, Input, Label, SubmitButton } from '../styled-components/Form';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  //calling and intializing useAuth() to use the signup function to create new users and call
  //the unsubsribe function in the useffect()
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/account');
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  }
  return (
    <div>
      <h1>login</h1>
      {error ? alert(error) : null}
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
          minLength="7"
          required
        />
        {!loading ? (
          <SubmitButton type="submit" />
        ) : (
          <button>Loading...</button>
        )}
      </Form>
      <div>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <h1>No account ? signup here: </h1>
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
      <div>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
}

export default Login;
