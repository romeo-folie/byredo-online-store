import {
  Container,
  Overlay,
  ItemSection,
  SummarySection,
  Row,
  BackRow,
  BackIcon,
  BackLink,
  BackLinkM,
  BackText,
  TitleRow,
  ItemSectionTitle,
  SectionTitleM,
  ItemCount,
  TableRow,
  THeader,
  Items,
  Note,
  SummarySectionTitle,
  CloseRow,
  CostDetails,
  DetName,
  DetValue,
  CostRow,
  PromoCodeRow,
  TotalCostRow,
  Amt,
  PromoCodeInput,
  CheckoutBtn,
  CheckoutBtnM,
  Table,
  Upper,
} from "./cart.styles";
import CartItem from "../cart-item/cart-item.component";
import {CloseIcon} from "./cart.styles";
import {useContext} from "react";
import {NavContext, TOGGLE_CART} from "../../context/nav.state";
import {useRouter} from "next/router";

const Cart = () => {
  const {state, dispatch} = useContext(NavContext);
  const router = useRouter();

  const handleCheckout = () => {
    dispatch({type: TOGGLE_CART});
    router.push("/checkout");
  };

  return (
    <>
      <Overlay isOpen={state.isCartOpen} />
      <Container isOpen={state.isCartOpen}>
        <ItemSection>
          <BackRow>
            <BackLink onClick={() => dispatch({type: TOGGLE_CART})}>
              <BackIcon />
              <BackText>Back to store</BackText>
            </BackLink>
          </BackRow>
          <TitleRow>
            <ItemSectionTitle>Shopping cart</ItemSectionTitle>
            <ItemCount>6 Items</ItemCount>
          </TitleRow>
          <Table>
            <TableRow>
              <THeader flex={4}>Item</THeader>

              <THeader flex={2}>Size</THeader>

              <THeader flex={2}>Quantity</THeader>

              <THeader flex={2}>Price</THeader>
            </TableRow>
            <Items>
              <CartItem
                name="Blanche"
                imagePath="/images/products/mob_blanche-body-wash_1-removebg-preview.png"
                type="Body Wash"
                size="225ml"
                price="50"
              />
              <CartItem
                name="Tulipmania"
                imagePath="/images/products/mob_tulipmania-rinse-free-removebg-preview.png"
                type="Hand Cream"
                size="30ml"
                price="30"
              />

              <CartItem
                name="Bal d'Afrique"
                imagePath="/images/products/mob_bal-d-afrique-perfumed-oil-7-5-ml_1-removebg-preview.png"
                type="Roll-on perfumed oil"
                size="15ml"
                price="20"
              />

              <CartItem
                name="Casablancalily"
                imagePath="/images/products/mob-casablancalily-removebg-preview.png"
                type="Eau de parfum"
                size="20ml"
                price="20"
              />
            </Items>
          </Table>
          <CheckoutBtnM onClick={handleCheckout}>
            Checkout
            <Amt>Total: $330.00</Amt>
          </CheckoutBtnM>
          <Note>Free shipping for all orders over $50</Note>
        </ItemSection>
        <SummarySection>
          <CloseRow>
            <BackLinkM onClick={() => dispatch({type: TOGGLE_CART})}>
              <BackIcon />
              <BackText>Back to store</BackText>
            </BackLinkM>
            <CloseIcon onClick={() => dispatch({type: TOGGLE_CART})} />
          </CloseRow>
          <SectionTitleM>Shopping Cart</SectionTitleM>
          <TitleRow>
            <SummarySectionTitle>Summary</SummarySectionTitle>
          </TitleRow>
          <CostDetails>
            <Upper>
              <CostRow>
                <DetName>Subtotal</DetName>
                <DetValue>$300.00</DetValue>
              </CostRow>
              <CostRow>
                <DetName>Shipping</DetName>
                <DetValue>$0.00</DetValue>
              </CostRow>
              <CostRow>
                <DetName>Tax</DetName>
                <DetValue>$30.50</DetValue>
              </CostRow>
              <PromoCodeRow>
                <DetName>Promo code</DetName>
                <PromoCodeInput placeholder="enter code" />
              </PromoCodeRow>
            </Upper>
            <TotalCostRow>
              <DetName>Total</DetName>
              <DetValue>$330.50</DetValue>
            </TotalCostRow>
          </CostDetails>
          <CheckoutBtn onClick={handleCheckout}>Checkout</CheckoutBtn>
        </SummarySection>
      </Container>
    </>
  );
};

export default Cart;
