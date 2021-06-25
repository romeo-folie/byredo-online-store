import {Container, Brand, Menu, UserIcon, SearchIcon} from "./header.styles";
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
  const [activeOption, setActiveOption] = useState("");

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {innerText} = e.target as HTMLAnchorElement;
    if (innerText === activeOption) {
      setActiveOption("");
    } else {
      setActiveOption(innerText);
    }
  };

  return (
    <Container>
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
