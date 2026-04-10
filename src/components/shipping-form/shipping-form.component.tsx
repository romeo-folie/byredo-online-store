import {
  FormSection,
  FormTitle,
  Form,
  Wrap,
  Row,
  Button,
  FormSectionTitle,
} from "../form/form.styles";
import Input from "../input/input.component";
import RadioBtnGroup from "../radio-btn-group/radio-btn-group.component";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
// import FormSelector from "../form-selector/form-selector.component";
import {useRouter} from "next/router";

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

const initialValues: FormValues = {
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
  name: "deliveryOption",
  value: "standard",
  aria: "delivery options",
  fields: [
    {
      label: "Europe Standard (3-4 business days)",
      value: "standard",
      price: "20.00",
    },
    {
      label: "Europe Express (1-2 business days)",
      value: "express",
      price: "40.00",
    },
  ],
};

import {useCheckout} from "../../context/checkout.state";

const ShippingForm = () => {
  const {checkoutData, setDetails} = useCheckout();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormValues>({
    defaultValues: {
      address: checkoutData.shippingDetails.address,
      city: checkoutData.shippingDetails.city,
      zipCode: checkoutData.shippingDetails.zipCode,
      country: checkoutData.shippingDetails.country,
      deliveryOption: checkoutData.shippingDetails.method === "Express" ? "express" : "standard",
    }
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    setDetails("shippingDetails", {
      address: data.address,
      city: data.city,
      zipCode: data.zipCode,
      country: data.country,
      method: data.deliveryOption === "express" ? "Express" : "Standard",
    });
    router.replace("/checkout/#payment");
  };

  return (
    <FormSection id="shipping">
      <FormTitle>Where would you like your order sent?</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Controller
          name="country"
          control={control}
          rules={{required: "Country is required"}}
          render={({field}) => (
            <Input
              label="Country"
              {...field}
              error={errors?.country?.message}
            />
          )}
        />

        <Controller
          name="address"
          control={control}
          rules={{required: "Address is required"}}
          render={({field}) => (
            <Input
              label="Address"
              {...field}
              error={errors?.address?.message}
            />
          )}
        />

        <Row>
          <Wrap width={66}>
            <Controller
              name="city"
              control={control}
              rules={{required: "City is required"}}
              render={({field}) => (
                <Input label="City" {...field} error={errors?.city?.message} />
              )}
            />
          </Wrap>

          <Wrap width={26}>
            <Controller
              name="zipCode"
              control={control}
              rules={{
                required: "Zip is required",
                pattern: {
                  value: /^\d{5}(-\d{4})?$/,
                  message: "Invalid zip code"
                }
              }}
              render={({field}) => (
                <Input
                  label="Zip Code"
                  {...field}
                  error={errors?.zipCode?.message}
                />
              )}
            />
          </Wrap>
        </Row>

        <Controller
          name="stateOrProvince"
          control={control}
          render={({field}) => (
            <Input
              label="State/Province"
              {...field}
              error={errors?.stateOrProvince?.message}
            />
          )}
        />

        <Row>
          <Wrap width={26}>
            <Controller
              name="countryCode"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  label="Country code"
                  error={errors?.countryCode?.message}
                />
              )}
            />
          </Wrap>

          <Wrap width={66}>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{required: "Phone is required"}}
              render={({field}) => (
                <Input
                  {...field}
                  label="Phone number"
                  error={errors?.phoneNumber?.message}
                />
              )}
            />
          </Wrap>
        </Row>

        <Row>
          <FormSectionTitle>Delivery options</FormSectionTitle>
        </Row>

        <Controller
          name="deliveryOption"
          control={control}
          rules={{required: "Please select a delivery option"}}
          render={({field}) => (
            <RadioBtnGroup
              {...field}
              {...radioProps}
              error={errors?.deliveryOption?.message}
            />
          )}
        />

        <Button type="submit">Proceed To Payment</Button>
      </Form>
    </FormSection>
  );
};

export default ShippingForm;
