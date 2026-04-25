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
import {useCheckout} from "../../context/checkout.state";

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
  const {checkoutData, setDetails, isProcessing, setIsProcessing, generateOrderInfo} = useCheckout();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormValues>({
    defaultValues: {
      cardNumber: checkoutData.paymentDetails.cardNumber,
      name: checkoutData.paymentDetails.cardName,
      expiration: checkoutData.paymentDetails.expiry,
      cvv: checkoutData.paymentDetails.cvv,
    }
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    setIsProcessing(true);
    setDetails("paymentDetails", {
      cardNumber: data.cardNumber,
      cardName: data.name,
      expiry: data.expiration,
      cvv: data.cvv,
    });

    setTimeout(() => {
      generateOrderInfo();
      setIsProcessing(false);
      router.push("/complete");
    }, 2500);
  };

  return (
    <FormSection id="payment">
      <FormTitle>How would you like to pay?</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Controller
          name="paymentType"
          control={control}
          rules={{required: "Required"}}
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
          rules={{required: "Name on card is required"}}
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
          rules={{
            required: "Card number is required",
            pattern: {
              value: /^\d{16}$/,
              message: "Invalid card number (16 digits)"
            }
          }}
          render={({field}) => (
            <Input
              label="Card number"
              {...field}
              placeholder="0000 0000 0000 0000"
              error={errors?.cardNumber?.message}
            />
          )}
        />

        <Row>
          <Wrap>
            <Controller
              name="expiration"
              control={control}
              rules={{
                required: "Required",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  message: "MM/YY"
                }
              }}
              render={({field}) => (
                <Input
                  label="Expiration"
                  {...field}
                  placeholder="MM/YY"
                  error={errors?.expiration?.message}
                />
              )}
            />
          </Wrap>

          <Wrap>
            <Controller
              name="cvv"
              control={control}
              rules={{
                required: "Required",
                pattern: {
                  value: /^\d{3,4}$/,
                  message: "3-4 digits"
                }
              }}
              render={({field}) => (
                <Input label="CVV" {...field} placeholder="000" error={errors?.cvv?.message} />
              )}
            />
          </Wrap>
        </Row>

        <Controller
          name="billingAddress"
          control={control}
          render={({field}) => (
            <Check
              {...field}
              label="Use shipping address as billing address"
            />
          )}
        />

        <Controller
          name="acceptTerms"
          control={control}
          rules={{required: "You must accept terms"}}
          render={({field}) => (
            <Check
              {...field}
              label="I accept Byredo Terms & Conditions"
              error={errors?.acceptTerms?.message}
            />
          )}
        />

        <Button type="submit" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Complete Purchase"}
        </Button>
      </Form>
    </FormSection>
  );
};

export default PaymentForm;
