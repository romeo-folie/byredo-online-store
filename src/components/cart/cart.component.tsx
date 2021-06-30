import {
  Container,
  Overlay,
  ItemSection,
  SummarySection,
  Row,
  BackIcon,
  BackLink,
  BackText,
  TitleRow,
  ItemSectionTitle,
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
  PromoCodeInput,
  CheckoutBtn,
  Table,
  Upper,
} from "./cart.styles";
import Link from "next/link";
import CartItem from "../cart-item/cart-item.component";
import {CloseIcon} from "../side-menu/side-menu.styles";

const Cart = () => {
  return (
    <>
      <Overlay isOpen />
      <Container isOpen>
        <ItemSection>
          <Row>
            <Link href="#" passHref>
              <BackLink>
                <BackIcon />
                <BackText>Back to store</BackText>
              </BackLink>
            </Link>
          </Row>
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
                name="Blanche"
                imagePath="/images/products/mob_blanche-hand-cream-30-ml-removebg-preview.png"
                type="Hand Cream"
                size="30ml"
                price="30"
              />
              <CartItem
                name="Casablancalily"
                imagePath="/images/products/mob-casablancalily-removebg-preview.png"
                type="eau de parfum"
                size="15ml"
                price="20"
              />

              <CartItem
                name="Casablancalily"
                imagePath="/images/products/mob-casablancalily-removebg-preview.png"
                type="eau de parfum"
                size="15ml"
                price="20"
              />

              <CartItem
                name="Casablancalily"
                imagePath="/images/products/mob-casablancalily-removebg-preview.png"
                type="eau de parfum"
                size="15ml"
                price="20"
              />

              <CartItem
                name="Casablancalily"
                imagePath="/images/products/mob-casablancalily-removebg-preview.png"
                type="eau de parfum"
                size="15ml"
                price="20"
              />

              <CartItem
                name="Casablancalily"
                imagePath="/images/products/mob-casablancalily-removebg-preview.png"
                type="eau de parfum"
                size="15ml"
                price="20"
              />
            </Items>
          </Table>
          <Note>Free shipping for all orders over $50</Note>
        </ItemSection>
        <SummarySection>
          <CloseRow>
            <CloseIcon />
          </CloseRow>
          <TitleRow>
            <SummarySectionTitle>Summary</SummarySectionTitle>
          </TitleRow>
          <CostDetails>
            <Upper>
              <CostRow>
                <DetName>Subtotal</DetName>
                <DetValue>$ 300.00</DetValue>
              </CostRow>
              <CostRow>
                <DetName>Shipping</DetName>
                <DetValue>$ 0.00</DetValue>
              </CostRow>
              <CostRow>
                <DetName>Tax</DetName>
                <DetValue>$ 30.50</DetValue>
              </CostRow>
              <CostRow>
                <DetName>Promo code</DetName>
                <PromoCodeInput placeholder="enter code" />
              </CostRow>
            </Upper>
            <CostRow>
              <DetName>Total</DetName>
              <DetValue>$ 330.50</DetValue>
            </CostRow>
          </CostDetails>
          <CheckoutBtn>Checkout</CheckoutBtn>
        </SummarySection>
      </Container>
    </>
  );
};

export default Cart;
