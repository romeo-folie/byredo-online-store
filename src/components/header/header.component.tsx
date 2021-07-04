import {
  Container,
  Brand,
  Menu,
  UserIcon,
  SearchIcon,
  MenuIcon,
} from "./header.styles";
import {useState, MouseEvent, useContext} from "react";
import Link from "next/link";
import CartIcon from "../cart-icon/cart-icon.component";
import NavItem from "../nav-item/nav-item.component";
import {
  NavContext,
  TOGGLE_MENU,
  TOGGLE_CART,
  TOGGLE_SEARCH,
  SET_NAV_OPTION,
} from "../../context/nav.state";

const Header = () => {
  const {state, dispatch} = useContext(NavContext);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {innerText} = e.target as HTMLAnchorElement;
    dispatch({type: SET_NAV_OPTION, payload: innerText});
  };

  return (
    <Container>
      <MenuIcon onClick={() => dispatch({type: TOGGLE_MENU})} />
      <Link href="/" passHref replace>
        <Brand />
      </Link>
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
        <UserIcon />
        <CartIcon onClick={() => dispatch({type: TOGGLE_CART})} />
      </Menu>
    </Container>
  );
};

export default Header;
