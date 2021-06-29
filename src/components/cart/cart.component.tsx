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
} from "./cart.styles";
import Link from "next/link";
import CartItem from "../cart-item/cart-item.component";

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
            <ItemCount>3 Items</ItemCount>
          </TitleRow>
          <TableRow>
            <THeader flex={4}>Item</THeader>

            <THeader flex={2}>Size</THeader>

            <THeader flex={2}>Quantity</THeader>

            <THeader flex={2}>Price</THeader>
          </TableRow>
          <CartItem />
        </ItemSection>
        <SummarySection>
          <h3>Summary</h3>
        </SummarySection>
      </Container>
    </>
  );
};

export default Cart;
