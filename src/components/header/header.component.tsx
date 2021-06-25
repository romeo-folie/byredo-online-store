import {
  Container,
  Brand,
  Menu,
  NavOption,
  UserIcon,
  SearchIcon,
} from "./header.styles";
import Link from "next/link";
import CartIcon from "../cart-icon/cart-icon.component";

const Header = () => {
  return (
    <Container>
      <Link href="/" passHref replace>
        <a>
          <Brand />
        </a>
      </Link>
      <Menu>
        <Link href="#" passHref replace>
          <NavOption>Leather</NavOption>
        </Link>
        <Link href="#" passHref replace>
          <NavOption>Eyewear</NavOption>
        </Link>
        <Link href="#" passHref replace>
          <NavOption>Perfume</NavOption>
        </Link>
        <Link href="#" passHref replace>
          <NavOption>Body care</NavOption>
        </Link>
        <Link href="#" passHref replace>
          <NavOption>Home Fragrance</NavOption>
        </Link>
        <Link href="#" passHref replace>
          <NavOption>Accessories</NavOption>
        </Link>
        <Link href="#" passHref replace>
          <NavOption>About</NavOption>
        </Link>
      </Menu>
      <Menu>
        <SearchIcon />
        <UserIcon />
        <CartIcon />
      </Menu>
    </Container>
  );
};

export default Header;
