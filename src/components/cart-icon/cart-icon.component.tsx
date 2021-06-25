import {Container, Bag, Count} from "./cart-icon.styles";

const CartIcon: React.FC = () => {
  return (
    <Container>
      <Bag />
      <Count>50</Count>
    </Container>
  );
};

export default CartIcon;
