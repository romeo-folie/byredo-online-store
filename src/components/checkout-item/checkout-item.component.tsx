import {
  Container,
  SpacedRow,
  Row,
  Name,
  Qty,
  Price,
  Size,
  Type,
} from "./checkout-item.styles";

const CheckoutItem = () => {
  return (
    <Container>
      <SpacedRow>
        <Name>{"Bal d'Afrique"}</Name>
        <Row>
          <Qty>1x</Qty>
          <Price>$40</Price>
        </Row>
      </SpacedRow>
      <Row>
        <Size>225ml</Size>
        <Type>Body wash</Type>
      </Row>
    </Container>
  );
};

export default CheckoutItem;
