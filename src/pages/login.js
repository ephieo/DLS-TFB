import React from 'react';
import { Form, Input, Label, SubmitButton } from './../components/Form';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <body>
      <h1>login</h1>
      <Form>
        <Label for="email">Email:</Label>
        <br />
        <Input type="email" id="email" name="email" />
        <Label for="email">Password:</Label>
        <br />
        <Input type="password" id="password" name="password" />
        <SubmitButton type="submit" />
      </Form>
      <h1>No account ? signup here: </h1>
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
    </body>
  );
}

export default Login;
