import {Container, Bag, Count} from "./cart-icon.styles";
import {useProductState} from "../../context/product.state";

const CartIcon: React.FC<{onClick: () => void}> = ({onClick}) => {
  const {productState} = useProductState();

  return (
    <Container onClick={onClick}>
      <Bag />
      <Count>{productState.cart.length}</Count>
    </Container>
  );
};

export default CartIcon;
