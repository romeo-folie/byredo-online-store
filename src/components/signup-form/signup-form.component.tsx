import React from "react";
import {
  Container,
  Form,
  Title,
  Row,
  Button,
} from "../signin-form/signin-form.styles";
import Input from "../input/input.component";
import Check from "../check/check.component";

const Signup = () => {
  return (
    <Container>
      <Form autoComplete="off">
        <Title>Register</Title>
        <Input label="Full name" name="fullName" />
        <Input label="Email address" name="email" />
        <Input label="Password" name="password" />
        <Input label="Confirm password" name="confirmPassword" />
        <Row>
          <Check name="terms" label="I accept the Terms and Conditions" />
        </Row>
        <Row>
          <Check name="newsletter" label="Subscribe to the newsletter" />
        </Row>
        <Row>
          <Check name="remember" label="Remember me" />
        </Row>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default Signup;
