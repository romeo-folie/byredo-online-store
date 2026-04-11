import { motion } from "framer-motion";
import {Container, Bag, Count} from "./cart-icon.styles";
import {useProductState} from "../../context/product.state";
import {useNavState} from "../../context/nav.state";

const CartIcon: React.FC<{onClick: () => void}> = ({onClick}) => {
  const {productState} = useProductState();
  const {state} = useNavState();

  // During loading the loader owns layoutId="cart-bag".
  // We only render the header version once loading is complete so
  // there is never more than one layoutId in the DOM at a time.
  if (state.isLoading) return null;

  return (
    <Container id="nav-cart-icon" onClick={onClick}>
      <motion.div
        layoutId="cart-bag"
        layout
        transition={{
          layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        }}
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Bag />
      </motion.div>
      <Count>{productState.cart.length}</Count>
    </Container>
  );
};

export default CartIcon;
