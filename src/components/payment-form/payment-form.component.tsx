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
import {useRouter} from "next/router";

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
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
    router.push("/complete");
  };

  return (
    <FormSection>
      <FormTitle>How would you like to pay?</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Controller
          name="paymentType"
          control={control}
          defaultValue={initialValues.paymentType}
          rules={{}}
          render={({field}) => (
            <RadioBtnGroup
              {...field}
              {...radioProps}
              error={errors?.paymentType?.message}
            />
          )}
        />

        <Controller
          name="name"
          control={control}
          defaultValue={initialValues.name}
          rules={{}}
          render={({field}) => (
            <Input
              label="Name on card"
              {...field}
              error={errors?.name?.message}
            />
          )}
        />

        <Controller
          name="cardNumber"
          control={control}
          defaultValue={initialValues.cardNumber}
          rules={{}}
          render={({field}) => (
            <Input
              label="Card number"
              {...field}
              error={errors?.cardNumber?.message}
            />
          )}
        />

        <Row>
          <Wrap>
            <Controller
              name="expiration"
              control={control}
              defaultValue={initialValues.expiration}
              rules={{}}
              render={({field}) => (
                <Input
                  label="Expiration"
                  {...field}
                  error={errors?.expiration?.message}
                />
              )}
            />
          </Wrap>

          <Wrap>
            <Controller
              name="cvv"
              control={control}
              defaultValue={initialValues.cvv}
              rules={{}}
              render={({field}) => (
                <Input label="CVV" {...field} error={errors?.cvv?.message} />
              )}
            />
          </Wrap>
        </Row>

        <Controller
          name="billingAddress"
          control={control}
          defaultValue={initialValues.billingAddress}
          rules={{}}
          render={({field}) => (
            <Check
              {...field}
              label="Use shipping address as billing address"
              error={errors?.billingAddress?.message}
            />
          )}
        />

        <Controller
          name="acceptTerms"
          control={control}
          defaultValue={initialValues.acceptTerms}
          rules={{}}
          render={({field}) => (
            <Check
              {...field}
              label="I accept Byredo Terms & Conditions"
              error={errors?.acceptTerms?.message}
            />
          )}
        />

        <Button type="submit">Complete Purchase</Button>
      </Form>
    </FormSection>
  );
};

export default PaymentForm;
