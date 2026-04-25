import {
  Container,
  Brand,
  Menu,
  UserIcon,
  SearchIcon,
  MenuIcon,
  ExitIcon,
  BrandWrapper,
  MenuIconWrapper,
} from "./header.styles";
import {MouseEvent} from "react";
import CartIcon from "../cart-icon/cart-icon.component";
import NavItem from "../nav-item/nav-item.component";
import {
  useNavState,
  TOGGLE_MENU,
  TOGGLE_CART,
  TOGGLE_SEARCH,
  SET_NAV_OPTION,
} from "../../context/nav.state";
import {useRouter} from "next/router";
import {useAuth} from "../../context/AuthContext";
import {signOut} from "firebase/auth";
import {auth} from "../../services/firebase/firebase";
import {useProductState, FILTER_PRODUCTS} from "../../context/product.state";
import {motion, Variants} from "framer-motion";

const headerVariants: Variants = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: {opacity: 0, y: -20},
  show: {opacity: 1, y: 0, transition: {type: "spring", stiffness: 300, damping: 24}}
};

const Header = () => {
  const {state, dispatch} = useNavState();
  const {productDispatch} = useProductState();
  const router = useRouter();
  const {user} = useAuth();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Prevent the Link's href="#" from firing a navigation that races
    // with router.replace("/") below → avoids "Cancel rendering route" error
    e.preventDefault();
    const {innerText} = e.target as HTMLAnchorElement;
    dispatch({type: SET_NAV_OPTION, payload: innerText});
    productDispatch({type: FILTER_PRODUCTS, payload: innerText});
    router.replace("/");
  };

  return (
    <Container as={motion.div} variants={headerVariants} initial="hidden" animate="show">
      <MenuIconWrapper variants={itemVariants} onClick={() => dispatch({type: TOGGLE_MENU})}>
        <MenuIcon />
      </MenuIconWrapper>
      <BrandWrapper variants={itemVariants} onClick={() => router.replace("/")}>
        <Brand />
      </BrandWrapper>
      <Menu as={motion.nav} variants={itemVariants}>
        {state.navOptions.map((opt, idx) => (
          <NavItem
            key={idx}
            onClick={handleClick}
            active={state.activeNavOption === opt}
          >
            {opt}
          </NavItem>
        ))}
      </Menu>
      <Menu as={motion.nav} variants={itemVariants}>
        <SearchIcon onClick={() => dispatch({type: TOGGLE_SEARCH})} />
        {user ? (
          <ExitIcon onClick={() => signOut(auth)} />
        ) : (
          <UserIcon onClick={() => router.replace("/auth")} />
        )}
        <CartIcon onClick={() => dispatch({type: TOGGLE_CART})} />
      </Menu>
    </Container>
  );
};

export default Header;
