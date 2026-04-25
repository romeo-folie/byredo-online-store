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
import {useAuth} from "../context/AuthContext";
import {useProductState} from "../context/product.state";
import {useRouter} from "next/router";
import {getTotalPrice} from "../utils/product.util";
import Head from "next/head";
import React from "react";
import {useCheckout} from "../context/checkout.state";

const Checkout = () => {
  const {dispatch} = useNavState();
  const {productState} = useProductState();
  const {user, loading} = useAuth();
  const {checkoutData} = useCheckout();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth");
    }
  }, [user, loading, router]);

  if (loading || !user) return null;

  const handleCartEdit = () => {
    dispatch({type: TOGGLE_CART});
  };
  const baseTotal = getTotalPrice(productState.cart);
  const shippingCost = checkoutData.shippingDetails.method === "Express" ? 40 : 20;
  const total = baseTotal > 0 ? baseTotal + shippingCost : 0;

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
            ${total.toFixed(2)}
          </DetValue>
        </Row>
      </ItemSection>
    </Container>
  );
};

export default Checkout;
