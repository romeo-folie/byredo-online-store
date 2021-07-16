import {useState, FormEvent, ChangeEvent} from "react";
import {
  FormSection,
  FormTitle,
  Form,
  Wrap,
  Row,
  Button,
  FormSectionTitle,
} from "./shipping-form.styles";
import Input from "../input/input.component";
import RadioBtn from "../radio-btn/radio-btn.component";
import {
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
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

const ShippingForm = () => {
  const [deliveryOption, setDeliveryOption] = useState<string>("standard");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeliveryOption(event.target.value);
  };

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

        <FormControl component="fieldset">
          <RadioGroup
            aria-label="delivery options"
            name="deliveryOptions"
            value={deliveryOption}
            onChange={handleChange}
          >
            <FormControlLabel
              value="standard"
              control={<RadioBtn />}
              label="Europe Standard (3-4 business days)"
            />
            <FormControlLabel
              value="express"
              control={<RadioBtn />}
              label="Europe Express (1-2 business days)"
            />
          </RadioGroup>
        </FormControl>

        <Button>Proceed To Payment</Button>
      </Form>
    </FormSection>
  );
};

export default ShippingForm;
