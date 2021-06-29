import {
  Container,
  Thumbnail,
  Description,
  ProdName,
  ProdType,
  ProdSize,
  ProdQty,
  Qty,
  Price,
  QtyBtn,
} from "./cart-item.styles";

const CartItem = () => {
  return (
    <Container>
      <Thumbnail src="/images/products/1996-removebg-preview.png" />
      <Description>
        <ProdName>1996</ProdName>
        <ProdType>Body Wash</ProdType>
      </Description>
      <ProdSize>225ml</ProdSize>
      <ProdQty>
        <QtyBtn>-</QtyBtn>
        <Qty>2</Qty>
        <QtyBtn>+</QtyBtn>
      </ProdQty>
      <Price>$50</Price>
    </Container>
  );
};

export default CartItem;
