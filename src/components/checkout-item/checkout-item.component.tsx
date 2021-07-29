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
import {ICartItem} from "../../context/product.state";

interface Props {
  product: ICartItem;
}

const CheckoutItem: React.FC<Props> = ({product}) => {
  const {name, quantity, size, price, type} = product;

  return (
    <Container>
      <SpacedRow>
        <Name>{name}</Name>
        <Row>
          <Qty>{`${quantity}x`}</Qty>
          <Price>${price * quantity}</Price>
        </Row>
      </SpacedRow>
      <Row>
        {size ? <Size>{`${size}ml`}</Size> : null}
        <Type>{type}</Type>
      </Row>
    </Container>
  );
};

export default CheckoutItem;
