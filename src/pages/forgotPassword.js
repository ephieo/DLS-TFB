import React, { useRef, useState } from 'react';
import { Form, Input, Label, SubmitButton } from '../styled-components/Form';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for futher instructions');
    } catch {
      setError('Failed to reset password');
    }
    setLoading(false);
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email:</Label>
        <br />
        <Input type="email" id="email" name="email" ref={emailRef} />
        {!loading ? (
          <SubmitButton type="submit" value="Reset Password" />
        ) : (
          <button>Loading...</button>
        )}
      </Form>
      <h1>Password Reset</h1>
      {error ? alert(error) : null}
      {message ? alert(message) : null}

      <h3>Log In ?</h3>
      <Link to="/login">
        <button>Log In</button>
      </Link>
      <h3>No account ? signup here: </h3>
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
    </div>
  );
}

export default ForgotPassword;
