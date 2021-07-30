import CheckoutItem from "../components/checkout-item/checkout-item.component";
import UserDetailForm from "../components/user-detail-form/user-detail-form.component";
import ShippingForm from "../components/shipping-form/shipping-form.component";
import PaymentForm from "../components/payment-form/payment-form.component";
import Link from "next/link";
import {useNavState, TOGGLE_CART} from "../context/nav.state";
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
import {withAuthUser, withAuthUserSSR, AuthAction} from "next-firebase-auth";
import {useProductState} from "../context/product.state";
import {getTotalPrice} from "../utils/product.util";
import Head from "next/head";

const Checkout = () => {
  const {dispatch} = useNavState();
  const {productState} = useProductState();

  const handleCartEdit = () => {
    dispatch({type: TOGGLE_CART});
  };

  const total = getTotalPrice(productState.cart);

  return (
    <Container>
      <Head>
        <title>Checkout</title>
      </Head>
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
          {productState.cart.map((item) => (
            <CheckoutItem key={item.id} product={item} />
          ))}
        </Items>
        <Row>
          <DetName>Promocode</DetName>
          <PromoCodeInput placeholder="enter code" />
        </Row>
        <Row>
          <DetName>Total</DetName>
          <DetValue>
            $
            {total > 50
              ? total.toFixed(2)
              : total > 0
              ? (total + 20).toFixed(2)
              : total.toFixed(2)}
          </DetValue>
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
