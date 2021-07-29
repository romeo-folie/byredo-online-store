import {
  Container,
  Brand,
  Menu,
  UserIcon,
  SearchIcon,
  MenuIcon,
  ExitIcon,
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
import {useAuthUser, withAuthUser} from "next-firebase-auth";
import {useProductState, FILTER_PRODUCTS} from "../../context/product.state";

const Header = () => {
  const {state, dispatch} = useNavState();
  const {productDispatch} = useProductState();
  const router = useRouter();
  const AuthUser = useAuthUser();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {innerText} = e.target as HTMLAnchorElement;
    dispatch({type: SET_NAV_OPTION, payload: innerText});
    productDispatch({type: FILTER_PRODUCTS, payload: innerText});
    router.replace("/");
  };

  return (
    <Container>
      <MenuIcon onClick={() => dispatch({type: TOGGLE_MENU})} />
      <Brand onClick={() => router.replace("/")} />
      <Menu>
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
      <Menu>
        <SearchIcon onClick={() => dispatch({type: TOGGLE_SEARCH})} />
        {AuthUser.id ? (
          <ExitIcon onClick={() => AuthUser.signOut()} />
        ) : (
          <UserIcon onClick={() => router.replace("/auth")} />
        )}
        <CartIcon onClick={() => dispatch({type: TOGGLE_CART})} />
      </Menu>
    </Container>
  );
};

export default withAuthUser()(Header);
