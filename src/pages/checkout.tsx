import {
  Container,
  TitleSection,
  ItemSection,
  PageTitle,
  Row,
  ItemSectionTitle,
  CartLink,
  Items,
  DetName,
  DetValue,
  PromoCodeInput,
  Forms,
} from "../pageStyles/checkout.styles";
import CheckoutItem from "../components/checkout-item/checkout-item.component";
import UserDetailForm from "../components/user-detail-form/user-detail-form.component";
import ShippingForm from "../components/shipping-form/shipping-form.component";

const Checkout = () => {
  return (
    <Container>
      <TitleSection>
        <PageTitle>Checkout</PageTitle>
      </TitleSection>
      <Forms>
        <UserDetailForm />
        <ShippingForm />
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
