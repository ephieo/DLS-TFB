import React from 'react';
import { Form, Input, Label } from './../components/Form';

function Signup() {
  return (
    <body>
      <h1>Sign up</h1>
      <Form>
        <Label for="email">Email:</Label>
        <br />
        <Input type="email" id="email" name="email" />
        <Label for="email">Password:</Label>
        <br />
        <Input type="password" id="password" name="password" />
      </Form>
    </body>
  );
}

export default Signup;
