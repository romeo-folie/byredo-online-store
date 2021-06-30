import {Container, Bag, Count} from "./cart-icon.styles";

const CartIcon: React.FC<{onClick: () => void}> = ({onClick}) => {
  return (
    <Container onClick={onClick}>
      <Bag />
      <Count>50</Count>
    </Container>
  );
};

export default CartIcon;
