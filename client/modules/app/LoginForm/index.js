import React from "react";
import styles from "./style.module.css";
import { Form, Checkbox, Header } from "semantic-ui-react";
import { forwardRefAs } from "../../../utils";

const ForwardableForm = forwardRefAs("form");

const LoginForm = ({
  credentials,
  handleOnChange,
  handleOnSubmit,
  loginFormRef,
}) => {
  return (
    <Form
      onSubmit={handleOnSubmit}
      as={ForwardableForm}
      forwardedRef={loginFormRef}
    >
      <Header as="h1">Bienvenue</Header>
      <p className={styles.titleDesc}>
        Log in to your Thunder account to get back your codes. Or new user Sign
        up.
      </p>
      <Form.Field>
        <Form.Input
          label="Username"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleOnChange}
          value={credentials.username}
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleOnChange}
          value={credentials.password}
        />
      </Form.Field>
      <Form.Field>
        <Form.Button
          fluid
          primary
          size="huge"
          className={styles.buttonConnectMarginTop}
        >
          Submit
        </Form.Button>
      </Form.Field>
      <Form.Field className={styles.sessionBlock}>
        <Checkbox
          label="Remember Me"
          name="remember"
          type="checkbox"
          tabIndex="0"
          className="hidden"
          ref={null}
          onChange={handleOnChange}
          checked={credentials.remember}
        />
        <a href="/">Forgot password ?</a>
      </Form.Field>
    </Form>
  );
};

export default LoginForm;
