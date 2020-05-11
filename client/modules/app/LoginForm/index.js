import React from "react";
import { Form, Button } from "semantic-ui-react";

const LoginForm = ({ credentials, handleOnChange, handleOnSubmit }) => (
  <Form onSubmit={handleOnSubmit}>
    <Form.Field>
      <Form.Input
        label="Username"
        name="username"
        onChange={handleOnChange}
        value={credentials.username}
      />
    </Form.Field>
    <Form.Field>
      <Form.Input
        label="Password"
        name="password"
        type="password"
        onChange={handleOnChange}
        value={credentials.password}
      />
    </Form.Field>
    <Form.Field>
      <Form.Checkbox
        label="Remember"
        name="remember"
        checked={credentials.remember}
        onChange={handleOnChange}
      />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

export default LoginForm;
