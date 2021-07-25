import CheckoutItem from "../components/checkout-item/checkout-item.component";
import UserDetailForm from "../components/user-detail-form/user-detail-form.component";
import ShippingForm from "../components/shipping-form/shipping-form.component";
import PaymentForm from "../components/payment-form/payment-form.component";
import Link from "next/link";
import {useContext} from "react";
import {NavContext, TOGGLE_CART} from "../context/nav.state";
import {
  Container,
  TitleSection,
  ItemSection,
  PageTitle,
  Row,
  BackRow,
  ItemSectionTitle,
  CartLink,
  Items,
  DetName,
  DetValue,
  PromoCodeInput,
  Forms,
} from "../pageStyles/checkout.styles";
import {
  useAuthUser,
  withAuthUser,
  withAuthUserSSR,
  AuthAction,
} from "next-firebase-auth";

const Checkout = () => {
  const {dispatch} = useContext(NavContext);

  const handleCartEdit = () => {
    dispatch({type: TOGGLE_CART});
  };

  return (
    <Container>
      <TitleSection>
        <PageTitle>Checkout</PageTitle>
      </TitleSection>
      <Forms>
        <BackRow>
          <Link href="/" passHref replace>
            <CartLink onClick={handleCartEdit}>Edit cart</CartLink>
          </Link>
        </BackRow>
        <UserDetailForm />
        <ShippingForm />
        <PaymentForm />
      </Forms>
      <ItemSection>
        <Row>
          <ItemSectionTitle>Items</ItemSectionTitle>
          <Link href="/" passHref replace>
            <CartLink onClick={handleCartEdit}>Edit cart</CartLink>
          </Link>
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

export const getServerSideProps = withAuthUserSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})();

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Checkout);
