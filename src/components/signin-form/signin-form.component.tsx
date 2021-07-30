import React from "react";
import {Container, Form, Title, Row, Button} from "./signin-form.styles";
import Input from "../input/input.component";
import Check from "../check/check.component";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {auth} from "../../services/firebase/firebase";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

const Signin: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const {email, password} = data;
    const {user} = await auth.signInWithEmailAndPassword(
      email.trim(),
      password.trim()
    );
    // console.log("logged in user ", user);
    // dispatch some kind of action to create the user
  };

  return (
    <Container>
      <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Title>Welcome back</Title>
        <Controller
          name="email"
          control={control}
          defaultValue={initialValues.email}
          rules={{required: "This field is required"}}
          render={({field}) => (
            <Input
              label="Email address"
              {...field}
              error={errors?.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue={initialValues.password}
          rules={{required: "This field is required"}}
          render={({field}) => (
            <Input
              label="Password"
              {...field}
              error={errors?.password?.message}
            />
          )}
        />

        <Row>
          <Check name="remember" label="Remember me" />
        </Row>

        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Signin;
