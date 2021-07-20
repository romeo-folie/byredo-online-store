import React from "react";
import {Container, Form, Title, Row, Button} from "./signin-form.styles";
import Input from "../input/input.component";
import Check from "../check/check.component";

const Signin = () => {
  return (
    <Container>
      <Form autoComplete="off">
        <Title>Login</Title>
        <Input label="Email address" name="email" />
        <Input label="Password" name="password" />
        <Row>
          <Check name="remember" label="Remember me" />
        </Row>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Signin;
