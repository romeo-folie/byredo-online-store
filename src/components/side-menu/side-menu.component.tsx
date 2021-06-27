import {useContext} from "react";
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
import {
  MenuContext,
  TOGGLE_MENU,
  TOGGLE_SUBMENU,
} from "../../context/sidemenu.state";
import Link from "next/link";

const SideMenu = () => {
  const {state, dispatch} = useContext(MenuContext);

  return (
    <Container isOpen={state.isMenuOpen}>
      <Header>
        <Brand />
        <CloseIcon onClick={() => dispatch({type: TOGGLE_MENU})} />
      </Header>
      <Menu>
        {state.navOptions.map((opt, idx) => (
          <Link passHref key={idx} href="#" replace>
            <Option
              onClick={() => dispatch({type: TOGGLE_SUBMENU, payload: opt})}
            >
              {opt}
            </Option>
          </Link>
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
