import {useState} from "react";
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
  return (
    <Container>
      <Header>
        <Brand />
        <CloseIcon />
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
