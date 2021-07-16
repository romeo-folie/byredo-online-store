import {
  FormSection,
  FormTitle,
  Form,
  Wrap,
  Row,
  Button,
} from "../form/form.styles";
import Input from "../input/input.component";
import RadioBtnGroup from "../radio-btn-group/radio-btn-group.component";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import Check from "../check/check.component";

interface FormValues {
  paymentType: string;
  name: string;
  cardNumber: string;
  expiration: string;
  cvv: string;
  billingAddress: boolean;
  acceptTerms: boolean;
}

const initialValues: FormValues = {
  paymentType: "",
  name: "",
  cardNumber: "",
  expiration: "",
  cvv: "",
  billingAddress: false,
  acceptTerms: false,
};

const radioProps = {
  name: "paymentType",
  value: "creditCard",
  aria: "payment type",
  fields: [
    {
      label: "Pay with Credit Card",
      value: "creditCard",
    },
    {
      label: "Pay with PayPal",
      value: "paypal",
    },
    {
      label: "Use Giftcard",
      value: "giftcard",
    },
  ],
};

const PaymentForm = () => {
  return (
    <FormSection>
      <FormTitle>How would you like to pay?</FormTitle>
      <Form autoComplete="off">
        <RadioBtnGroup {...radioProps} />

        <Input label="Name on card" name="name" />

        <Input label="Card number" name="cardNumber" />

        <Row>
          <Wrap>
            <Input label="Expiration" name="expiration" />
          </Wrap>

          <Wrap>
            <Input label="CVV" name="cvv" />
          </Wrap>
        </Row>

        <Check label="Use shipping address as billing address" name="billingAddress" />

        <Check label="I accept Byredo Terms & Conditions" name="acceptTerms" />

        <Button>Complete Purchase</Button>
      </Form>
    </FormSection>
  );
};

export default PaymentForm;
