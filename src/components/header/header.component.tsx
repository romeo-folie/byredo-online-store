import {
  Container,
  Brand,
  Menu,
  UserIcon,
  SearchIcon,
  MenuIcon,
} from "./header.styles";
import {useState, MouseEvent} from "react";
import Link from "next/link";
import CartIcon from "../cart-icon/cart-icon.component";
import NavItem from "../nav-item/nav-item.component";

const navOptions = [
  "Leather",
  "Eyewear",
  "Perfume",
  "Body care",
  "Home fragrance",
  "Accessories",
  "About",
];

const Header = () => {
  const [activeOption, setActiveOption] = useState("Perfume");

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {innerText} = e.target as HTMLAnchorElement;
    setActiveOption(innerText);
  };

  return (
    <Container>
      <MenuIcon />
      <Link href="/" passHref replace>
        <a>
          <Brand />
        </a>
      </Link>
      <Menu>
        {navOptions.map((opt, idx) => (
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
        <SearchIcon />
        <UserIcon />
        <CartIcon />
      </Menu>
    </Container>
  );
};

export default Header;
