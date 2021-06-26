import {useState, useContext} from "react";
import {
  Container,
  Header,
  Brand,
  CloseIcon,
  Menu,
  Option,
  Footer,
  SocialWrap,
  InstaIcon,
  FacebookIcon,
} from "./side-menu.styles";
import {MenuContext} from "../../context/sidemenu.state";

const navOptions = [
  "Leather",
  "Eyewear",
  "Perfume",
  "Body care",
  "Home fragrance",
  "Accessories",
  "About",
];

const SideMenu = () => {
  const {isOpen, toggleMenu} = useContext(MenuContext);

  return (
    <Container isOpen={isOpen}>
      <Header>
        <Brand />
        <CloseIcon onClick={toggleMenu} />
      </Header>
      <Menu>
        {navOptions.map((opt, idx) => (
          <Option key={idx}>{opt}</Option>
        ))}
      </Menu>
      <Footer>
        <Option>Support</Option>
        <SocialWrap>
          <InstaIcon />
          <FacebookIcon />
        </SocialWrap>
      </Footer>
    </Container>
  );
};

export default SideMenu;
