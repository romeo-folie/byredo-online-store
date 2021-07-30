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
  Row,
  ProdNameM,
  RemoveIconM,
  SpacedRow,
  ProdSizeM,
  ProdTypeM,
  ProdQtyM,
  PriceM,
} from "./cart-item.styles";
import {RemoveIcon} from "./cart-item.styles";
import {
  ICartItem,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  useProductState,
  CLEAR_FROM_CART,
} from "../../context/product.state";

interface Props {
  product: ICartItem;
}

const CartItem: React.FC<Props> = ({product}) => {
  const {name, type, url, size, quantity, price} = product;
  const {productDispatch} = useProductState();

  return (
    <Container>
      <Thumbnail src={url} />
      <Description>
        <ProdName>{name}</ProdName>
        <ProdType>{type}</ProdType>

        {/* Mobile */}
        <SpacedRow>
          <ProdNameM>{name}</ProdNameM>
          <RemoveIconM
            onClick={() =>
              productDispatch({type: CLEAR_FROM_CART, payload: product.id})
            }
          />
        </SpacedRow>
        <Row>
          {size ? <ProdSizeM>{`${size}ml`}</ProdSizeM> : null}
          <ProdTypeM>{type}</ProdTypeM>
        </Row>
        <SpacedRow>
          <ProdQtyM>
            <QtyBtn
              onClick={() =>
                productDispatch({type: REMOVE_FROM_CART, payload: product})
              }
            >
              -
            </QtyBtn>
            <Qty>{quantity}</Qty>
            <QtyBtn
              onClick={() =>
                productDispatch({type: ADD_TO_CART, payload: product})
              }
            >
              +
            </QtyBtn>
          </ProdQtyM>
          <PriceM>${price * quantity}</PriceM>
        </SpacedRow>
        {/* Mobile */}
      </Description>
      {size ? <ProdSize>{`${size}ml`}</ProdSize> : <ProdSize />}
      <ProdQty>
        <QtyBtn
          onClick={() =>
            productDispatch({type: REMOVE_FROM_CART, payload: product})
          }
        >
          -
        </QtyBtn>
        <Qty>{quantity}</Qty>
        <QtyBtn
          onClick={() => productDispatch({type: ADD_TO_CART, payload: product})}
        >
          +
        </QtyBtn>
      </ProdQty>
      <Price>${price * quantity}</Price>
      <RemoveIcon
        onClick={() =>
          productDispatch({type: CLEAR_FROM_CART, payload: product.id})
        }
      />
    </Container>
  );
};

export default CartItem;
