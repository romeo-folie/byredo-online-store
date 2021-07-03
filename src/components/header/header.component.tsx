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
import {MenuContext, TOGGLE_MENU, TOGGLE_CART} from "../../context/menu.state";

const Header = () => {
  const [activeOption, setActiveOption] = useState("Eyewear");
  const {state, dispatch} = useContext(MenuContext);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {innerText} = e.target as HTMLAnchorElement;
    setActiveOption(innerText);
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
            active={activeOption === opt}
          >
            {opt}
          </NavItem>
        ))}
      </Menu>
      <Menu>
        <Link href="/search" passHref>
          <SearchIcon />
        </Link>
        <UserIcon />
        <CartIcon onClick={() => dispatch({type: TOGGLE_CART})} />
      </Menu>
    </Container>
  );
};

export default Header;
