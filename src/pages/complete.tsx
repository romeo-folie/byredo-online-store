import React from "react";
import {
  Container,
  Header,
  Brand,
  Row,
  Search,
  User,
  Menu,
  MainSection,
  MainTitle,
  SubTitle,
  Wrap,
  Spacer,
  Span,
  P,
  Button,
  BaseRow,
  MessageRow,
  Detail,
  Items,
  SummaryTitle,
  SummarySection,
} from "../pageStyles/complete.styles";
import {ExitIcon} from "../components/header/header.styles";
import CartIcon from "../components/cart-icon/cart-icon.component";
import Link from "next/link";
import {
  useNavState,
  TOGGLE_MENU,
  TOGGLE_CART,
  TOGGLE_SEARCH,
} from "../context/nav.state";
import {useRouter} from "next/router";
import SummaryItem from "../components/summary-item/summary-item.component";
import {
  useAuthUser,
  withAuthUser,
  withAuthUserSSR,
  AuthAction,
} from "next-firebase-auth";
import {useProductState, CLEAR_CART} from "../context/product.state";
import {getTotalPrice} from "../utils/product.util";

const Complete = () => {
  const {dispatch} = useNavState();
  const router = useRouter();
  const AuthUser = useAuthUser();
  const {productState, productDispatch} = useProductState();

  const total = getTotalPrice(productState.cart);

  const handleCompletion = () => {
    router.replace("/");
    productDispatch({type: CLEAR_CART});
  };

  return (
    <Container>
      <Header>
        <Menu onClick={() => dispatch({type: TOGGLE_MENU})} />
        <Brand onClick={() => router.replace("/")} />

        <Row>
          <Search onClick={() => dispatch({type: TOGGLE_SEARCH})} />
          {AuthUser.id ? (
            <ExitIcon onClick={() => AuthUser.signOut()} />
          ) : (
            <User onClick={() => router.replace("/auth")} />
          )}
          <CartIcon onClick={() => dispatch({type: TOGGLE_CART})} />
        </Row>
      </Header>
      <MainSection>
        <Wrap>
          <MainTitle>
            {"Thank you for shopping with Byredo."}
            <br />
            {"You've made a great choice"}
          </MainTitle>
          <SubTitle>
            {`Confirmation letter has been sent to ${AuthUser.email}`}
          </SubTitle>
        </Wrap>

        <Wrap>
          <MessageRow>
            <Wrap width={40}>
              <Span>Hello, {`${AuthUser.displayName}`}</Span>
              <P>
                Your order has been successfully completed and will be delivered
                to you in the near future. You can track the delivery status in
                the Personal Account. You could also receive a notification with
                a link to track the parcel from our partner DHL.
              </P>
              <Span>BYREDO</Span>
            </Wrap>
            <Button onClick={handleCompletion}>Back to store</Button>
          </MessageRow>
        </Wrap>
      </MainSection>
      <SummarySection>
        <SummaryTitle>Order summary</SummaryTitle>

        <Wrap>
          <Detail>
            <Span bold>Order No</Span>
            <Span>9PM2EQ</Span>
          </Detail>

          <Detail>
            <Span bold>Est delivery date</Span>
            <Span>06.08.19</Span>
          </Detail>

          <Detail>
            <Span bold>Shipping details</Span>
            <Span>
              {AuthUser.displayName}
              <br />
              194 Ferry St London, 07015
              <br />
              Europe Standard
            </Span>
          </Detail>
        </Wrap>

        <Detail>
          <Spacer width={40} />
          <BaseRow>
            <Span bold>Total</Span>
            <Span bold>
              $
              {total > 50
                ? total.toFixed(2)
                : total > 0
                ? (total + 20).toFixed(2)
                : total.toFixed(2)}
            </Span>
          </BaseRow>
        </Detail>

        <Items>
          {productState.cart.map((item) => (
            <SummaryItem product={item} key={item.id} />
          ))}
        </Items>

        <Detail>
          <Spacer width={40} />
          <BaseRow>
            <Span>Shipping</Span>
            <Span>${total > 50 ? "0.00" : "20.00"}</Span>
          </BaseRow>
        </Detail>
      </SummarySection>
    </Container>
  );
};

export const getServerSideProps = withAuthUserSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})();

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Complete);
