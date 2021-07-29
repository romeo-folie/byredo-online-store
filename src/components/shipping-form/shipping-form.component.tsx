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

const ShippingForm = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
    router.replace("/checkout/#payment");
  };

  return (
    <FormSection id="shipping">
      <FormTitle>Where would you like your order sent?</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Controller
          name="country"
          control={control}
          defaultValue={initialValues.country}
          rules={{}}
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
          defaultValue={initialValues.address}
          rules={{}}
          render={({field}) => (
            <Input
              label="Address"
              {...field}
              error={errors?.country?.message}
            />
          )}
        />

        <Row>
          <Wrap width={66}>
            <Controller
              name="city"
              control={control}
              defaultValue={initialValues.city}
              rules={{}}
              render={({field}) => (
                <Input label="City" {...field} error={errors?.city?.message} />
              )}
            />
          </Wrap>

          <Wrap width={26}>
            <Controller
              name="zipCode"
              control={control}
              defaultValue={initialValues.zipCode}
              rules={{}}
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
          defaultValue={initialValues.stateOrProvince}
          rules={{}}
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
              defaultValue={initialValues.countryCode}
              rules={{}}
              render={({field}) => (
                <Input
                  {...field}
                  label="Country code"
                  error={errors?.countryCode?.message}
                />
                // <FormSelector />
              )}
            />
          </Wrap>

          <Wrap width={66}>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue={initialValues.phoneNumber}
              rules={{}}
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
          defaultValue={initialValues.deliveryOption}
          rules={{}}
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
