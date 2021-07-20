import React, {useContext} from "react";
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
import CartIcon from "../components/cart-icon/cart-icon.component";
import Link from "next/link";
import {
  NavContext,
  TOGGLE_MENU,
  TOGGLE_CART,
  TOGGLE_SEARCH,
} from "../context/nav.state";
import {useRouter} from "next/router";
import SummaryItem from "../components/summary-item/summary-item.component";

const Complete = () => {
  const {state, dispatch} = useContext(NavContext);
  const router = useRouter();

  return (
    <Container>
      <Header>
        <Menu onClick={() => dispatch({type: TOGGLE_MENU})} />
        <Link href="/" passHref replace>
          <Brand />
        </Link>

        <Row>
          <Search onClick={() => dispatch({type: TOGGLE_SEARCH})} />
          <User />
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
            Confirmation letter has been sent to john.appleseed@gmail.com
          </SubTitle>
        </Wrap>

        <Wrap>
          <MessageRow>
            <Wrap width={40}>
              <Span>Hello, John Appleseed</Span>
              <P>
                Your order has been successfully completed and will be delivered
                to you in the near future. You can track the delivery status in
                the Personal Account. You could also receive a notification with
                a link to track the parcel from our partner DHL.
              </P>
              <Span>BYREDO</Span>
            </Wrap>
            <Button onClick={() => router.replace("/")}>Back to store</Button>
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
              John Appleseed
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
            <Span bold>$330.00</Span>
          </BaseRow>
        </Detail>

        <Items>
          <SummaryItem />
          {/* <SummaryItem />
          <SummaryItem />
          <SummaryItem />
          <SummaryItem />
          <SummaryItem />
          <SummaryItem />
          <SummaryItem />
          <SummaryItem /> */}
        </Items>

        <Detail>
          <Spacer width={40} />
          <BaseRow>
            <Span>Shipping</Span>
            <Span>$0.00</Span>
          </BaseRow>
        </Detail>
      </SummarySection>
    </Container>
  );
};

export default Complete;
