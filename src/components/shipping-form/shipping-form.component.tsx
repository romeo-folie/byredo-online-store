import {useState, FormEvent, ChangeEvent} from "react";
import {
  FormSection,
  FormTitle,
  Form,
  Wrap,
  Row,
  FormSectionTitle,
} from "./shipping-form.styles";
import Button from "../submit-btn/submit-btn.styles";
import Input from "../input/input.component";
import RadioBtnGroup from "../radio-btn-group/radio-btn-group.component";
import {useForm, Controller, SubmitHandler} from "react-hook-form";

interface FormValues {
  country: string;
  address: string;
  city: string;
  zipCode: string;
  stateOrProvince: string;
  countryCode: string;
  phoneNumber: string;
  deliveryOption: string;
}

const initialValues = {
  country: "",
  address: "",
  city: "",
  zipCode: "",
  stateOrProvince: "",
  countryCode: "",
  phoneNumber: "",
  deliveryOption: "",
};

const radioProps = {
  name: "deliveryOptions",
  value: "standard",
  aria: "delivery options",
  fields: [
    {
      label: "Europe Standard (3-4 business days)",
      value: "standard",
    },
    {
      label: "Europe Express (1-2 business days)",
      value: "express",
    },
  ],
};

const ShippingForm = () => {
  return (
    <FormSection>
      <FormTitle>Where would you like your order sent?</FormTitle>
      <Form autoComplete="off">
        <Input label="Country" name="country" />

        <Input label="Address" name="address" />

        <Row>
          <Wrap width={66}>
            <Input label="City" name="city" />
          </Wrap>

          <Wrap width={26}>
            <Input label="Zip Code" name="zipCode" />
          </Wrap>
        </Row>

        <Input label="State/Province" name="stateOrProvince" />

        <Row>
          <Wrap width={26}>
            <Input label="Country code" name="countryCode" />
          </Wrap>

          <Wrap width={66}>
            <Input label="Phone number" name="phoneNumber" />
          </Wrap>
        </Row>

        <Row>
          <FormSectionTitle>Delivery options</FormSectionTitle>
        </Row>

        <RadioBtnGroup {...radioProps} />

        <Button>Proceed To Payment</Button>
      </Form>
    </FormSection>
  );
};

export default ShippingForm;
