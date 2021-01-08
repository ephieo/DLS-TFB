import React, { useRef } from 'react';
import { Form, Input, Label, SubmitButton } from './../components/Form';
import { Link } from 'react-router-dom';

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  return (
    <body>
      <h1>Sign up</h1>
      <Form>
        <Label for="email">Email:</Label>
        <br />
        <Input type="email" id="email" name="email" ref={emailRef} />
        <Label for="email">Password:</Label>
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

        <SubmitButton type="submit" />
      </Form>
      <h1> Already have an account ? </h1>
      <Link to="/login">
        <button>LogIn</button>
      </Link>
    </body>
  );
}

export default Signup;
