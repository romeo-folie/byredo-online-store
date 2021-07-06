import {useState, FormEvent, ChangeEvent} from "react";
import {
  Container,
  TitleSection,
  FormSection,
  ItemSection,
  PageTitle,
  FormTitle,
  Form,
  Row,
  Wrap,
  Button,
  ItemSectionTitle,
  CartLink,
  Items,
  DetName,
  DetValue,
  PromoCodeInput,
  Forms,
} from "../pageStyles/checkout.styles";
import Input from "../components/input/input.component";
import CheckoutItem from "../components/checkout-item/checkout-item.component";

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

const Checkout = () => {
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
    <Container>
      <TitleSection>
        <PageTitle>Checkout</PageTitle>
      </TitleSection>
      <Forms>
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
      </Forms>
      <ItemSection>
        <Row>
          <ItemSectionTitle>Items</ItemSectionTitle>
          <CartLink>Edit cart</CartLink>
        </Row>
        <Items>
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
        </Items>
        <Row>
          <DetName>Promocode</DetName>
          <PromoCodeInput placeholder="enter code" />
        </Row>
        <Row>
          <DetName>Total</DetName>
          <DetValue>$330.50</DetValue>
        </Row>
      </ItemSection>
    </Container>
  );
};

export default Checkout;
