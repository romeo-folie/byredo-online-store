import {useState, FormEvent, ChangeEvent} from "react";
import {
  FormSection,
  FormTitle,
  Form,
  Wrap,
  Row,
  Button,
} from "./shipping-form.styles";
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

const ShippingForm = () => {
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
      <FormTitle>Where would you like your order sent?</FormTitle>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          label="Country"
          name="country"
          onChange={handleInputChange}
          value={values.email}
          error={errors.email}
        />

        <Input
          label="Address"
          name="address"
          onChange={handleInputChange}
          value={values.email}
          error={errors.email}
        />

        <Row>
          <Wrap width={66}>
            <Input
              label="City"
              name="city"
              onChange={handleInputChange}
              value={values.firstname}
              error={errors.firstname}
            />
          </Wrap>

          <Wrap width={26}>
            <Input
              label="Zip Code"
              name="zipcode"
              onChange={handleInputChange}
              value={values.lastname}
              error={errors.lastname}
            />
          </Wrap>
        </Row>

        <Input
          label="State/Province"
          name="state_or_province"
          onChange={handleInputChange}
          value={values.email}
          error={errors.email}
        />

        <Row>
          <Wrap width={26}>
            <Input
              label="Country code"
              name="country_code"
              onChange={handleInputChange}
              value={values.firstname}
              error={errors.firstname}
            />
          </Wrap>

          <Wrap width={66}>
            <Input
              label="Phone number"
              name="phone_number"
              onChange={handleInputChange}
              value={values.lastname}
              error={errors.lastname}
            />
          </Wrap>
        </Row>

        <Button>Proceed To Payment</Button>
      </Form>
    </FormSection>
  );
};

export default ShippingForm;
