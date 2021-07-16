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

const UserDetailForm = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
  };

  return (
    <FormSection>
      <FormTitle>Who is placing this order?</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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

        <Row>
          <Wrap>
            <Controller
              name="firstname"
              control={control}
              defaultValue={initialValues.firstname}
              rules={{required: "This field is required"}}
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
              defaultValue={initialValues.lastname}
              rules={{required: "This field is required"}}
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
