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
import {useNavState, TOGGLE_CART} from "../../context/nav.state";
import {useRouter} from "next/router";
import {useProductState} from "../../context/product.state";
import {getTotalPrice} from "../../utils/product.util";

const Cart = () => {
  const {state, dispatch} = useNavState();
  const router = useRouter();
  const {productState} = useProductState();

  const handleCheckout = () => {
    dispatch({type: TOGGLE_CART});
    router.push("/checkout");
  };

  const total = getTotalPrice(productState.cart);

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
            <ItemCount>{`${productState.cart.length} ${
              productState.cart.length > 1 ? "items" : "item"
            }`}</ItemCount>
          </TitleRow>
          <Table>
            <TableRow>
              <THeader flex={4}>Item</THeader>

              <THeader flex={2}>Size</THeader>

              <THeader flex={2}>Quantity</THeader>

              <THeader flex={2}>Price</THeader>
            </TableRow>
            <Items>
              {productState.cart.map((prod) => (
                <CartItem product={prod} key={prod.id} />
              ))}
            </Items>
          </Table>
          <CheckoutBtnM disabled={total < 1} onClick={handleCheckout}>
            Checkout
            <Amt>
              Total: $
              {total > 50
                ? total.toFixed(2)
                : total > 0
                ? (total + 20).toFixed(2)
                : total.toFixed(2)}
            </Amt>
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
                <DetValue>${total.toFixed(2)}</DetValue>
              </CostRow>
              <CostRow>
                <DetName>Shipping</DetName>
                <DetValue>${total > 50 ? "0.00" : "20.00"}</DetValue>
              </CostRow>
              <CostRow>
                <DetName>Tax</DetName>
                <DetValue>$0.00</DetValue>
              </CostRow>
              <PromoCodeRow>
                <DetName>Promo code</DetName>
                <PromoCodeInput placeholder="enter code" />
              </PromoCodeRow>
            </Upper>
            <TotalCostRow>
              <DetName>Total</DetName>
              <DetValue>
                $
                {total > 50
                  ? total.toFixed(2)
                  : total > 0
                  ? (total + 20).toFixed(2)
                  : total.toFixed(2)}
              </DetValue>
            </TotalCostRow>
          </CostDetails>
          <CheckoutBtn disabled={total < 1} onClick={handleCheckout}>
            Checkout
          </CheckoutBtn>
        </SummarySection>
      </Container>
    </>
  );
};

export default Cart;
