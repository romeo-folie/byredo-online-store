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
import {RemoveIcon} from "./cart-item.styles";

interface Props {
  imagePath: string;
  name: string;
  type: string;
  size: string;
  price: string;
}

const CartItem: React.FC<Props> = ({imagePath, name, type, size, price}) => {
  return (
    <Container>
      <Thumbnail src={imagePath} />
      <Description>
        <ProdName>{name}</ProdName>
        <ProdType>{type}</ProdType>
      </Description>
      <ProdSize>{size}</ProdSize>
      <ProdQty>
        <QtyBtn>-</QtyBtn>
        <Qty>2</Qty>
        <QtyBtn>+</QtyBtn>
      </ProdQty>
      <Price>${price}</Price>
      <RemoveIcon />
    </Container>
  );
};

export default CartItem;
