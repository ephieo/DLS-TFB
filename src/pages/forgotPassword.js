import React, { useRef, useState } from 'react';
import { Form, Title, Input, Label, SubmitButton, TextBottom } from '../styled-components/Form';
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
        <Title>Password Reset</Title>
        <Label htmlFor="email">Email:</Label>        
        <Input type="email" id="email" name="email" ref={emailRef} required/>
        {!loading ? (
          <SubmitButton type="submit" value="Reset Password" />
        ) : (
          <button>Loading...</button>
        )}
        <TextBottom>No account? <Link to="/signup" style={{ textDecoration: 'none', color: '#79CF98' }} >signup here</Link></TextBottom>
        <TextBottom>Log In? <Link to="/login" style={{ textDecoration: 'none', color: '#79CF98' }} >Log In here</Link></TextBottom>     
        
      </Form>
      {error ? alert(error) : null}
      {message ? alert(message) : null}

    </div>
  );
}

export default ForgotPassword;
