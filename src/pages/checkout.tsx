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
      <FormSection>
        <FormTitle>Who is placing this order?</FormTitle>
        {/* form */}
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
