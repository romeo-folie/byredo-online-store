import {
  Container,
  Brand,
  Menu,
  UserIcon,
  SearchIcon,
  MenuIcon,
} from "./header.styles";
import {MouseEvent, useContext} from "react";
import CartIcon from "../cart-icon/cart-icon.component";
import NavItem from "../nav-item/nav-item.component";
import {
  NavContext,
  TOGGLE_MENU,
  TOGGLE_CART,
  TOGGLE_SEARCH,
  SET_NAV_OPTION,
} from "../../context/nav.state";
import {useRouter} from "next/router";

const Header = () => {
  const {state, dispatch} = useContext(NavContext);
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {innerText} = e.target as HTMLAnchorElement;
    dispatch({type: SET_NAV_OPTION, payload: innerText});
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
        <UserIcon onClick={() => router.replace("/auth")} />
        <CartIcon onClick={() => dispatch({type: TOGGLE_CART})} />
      </Menu>
    </Container>
  );
};

export default Header;
