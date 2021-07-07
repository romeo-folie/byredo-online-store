import {useState, FormEvent, ChangeEvent} from "react";
import {
  FormSection,
  FormTitle,
  Form,
  Wrap,
  Row,
  Button,
} from "./user-detail-form.styles";
import Input from "../input/input.component";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
}

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
};

const UserDetailForm = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormValues>(initialValues);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log("values ", values);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target;

    setValues({
      ...values,
      [name as string]: value,
    });

    // validate({[name as string]: value});
  };

  return (
    <FormSection>
      <FormTitle>Who is placing this order?</FormTitle>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          label="Email address"
          name="email"
          onChange={handleInputChange}
          value={values.email}
          error={errors.email}
        />

        <Row>
          <Wrap>
            <Input
              label="First name"
              name="firstname"
              onChange={handleInputChange}
              value={values.firstname}
              error={errors.firstname}
            />
          </Wrap>

          <Wrap>
            <Input
              label="Last name"
              name="lastname"
              onChange={handleInputChange}
              value={values.lastname}
              error={errors.lastname}
            />
          </Wrap>
        </Row>
        <Button>Proceed To Shipping</Button>
      </Form>
    </FormSection>
  );
};

export default UserDetailForm;
