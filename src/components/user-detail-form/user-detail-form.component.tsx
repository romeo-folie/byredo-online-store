import {
  FormSection,
  FormTitle,
  Form,
  Wrap,
  Row,
  Button,
} from "../form/form.styles";
import Input from "../input/input.component";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {useRouter} from "next/router";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
}

const initialValues: FormValues = {
  firstname: "",
  lastname: "",
  email: "",
};

import {useCheckout} from "../../context/checkout.state";

const UserDetailForm = () => {
  const {checkoutData, setDetails} = useCheckout();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormValues>({
    defaultValues: {
      firstname: checkoutData.userDetails.firstName,
      lastname: checkoutData.userDetails.lastName,
      email: checkoutData.userDetails.email,
    }
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    setDetails("userDetails", {
      firstName: data.firstname,
      lastName: data.lastname,
      email: data.email,
    });
    router.replace("/checkout/#shipping");
  };

  return (
    <FormSection id="user-details">
      <FormTitle>Who is placing this order?</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          }}
          render={({field}) => (
            <Input
              label="Email address"
              {...field}
              error={errors?.email?.message}
            />
          )}
        />

        <Row>
          <Wrap>
            <Controller
              name="firstname"
              control={control}
              rules={{required: "First name is required"}}
              render={({field}) => (
                <Input
                  label="First Name"
                  {...field}
                  error={errors?.firstname?.message}
                />
              )}
            />
          </Wrap>

          <Wrap>
            <Controller
              name="lastname"
              control={control}
              rules={{required: "Last name is required"}}
              render={({field}) => (
                <Input
                  label="Last Name"
                  {...field}
                  error={errors?.lastname?.message}
                />
              )}
            />
          </Wrap>
        </Row>
        <Button type="submit">Proceed To Shipping</Button>
      </Form>
    </FormSection>
  );
};

export default UserDetailForm;
