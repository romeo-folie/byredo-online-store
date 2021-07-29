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
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {auth} from "../../services/firebase/firebase";

interface FormValues {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: FormValues = {
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
    getValues,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const {fullname, email, password} = data;
    const {user} = await auth.createUserWithEmailAndPassword(email, password);
    if (user) {
      await user.updateProfile({
        displayName: fullname,
      });
    }
  };

  return (
    <Container>
      <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Title>Create Account</Title>

        <Controller
          name="fullname"
          control={control}
          defaultValue={initialValues.fullname}
          rules={{required: "This field is required"}}
          render={({field}) => (
            <Input
              label="Full name"
              {...field}
              error={errors?.fullname?.message}
            />
          )}
        />

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

        <Controller
          name="confirmPassword"
          control={control}
          defaultValue={initialValues.confirmPassword}
          rules={{
            required: "This field is required",
            validate: (value) =>
              value === getValues("password") || "The passwords do not match",
          }}
          render={({field}) => (
            <Input
              label="Confirm password"
              {...field}
              error={errors?.confirmPassword?.message}
            />
          )}
        />

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
