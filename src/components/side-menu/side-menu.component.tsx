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
  NavContext,
  TOGGLE_MENU,
  TOGGLE_SUBMENU,
} from "../../context/nav.state";
import Link from "next/link";

const SideMenu = () => {
  const {state, dispatch} = useContext(NavContext);

  return (
    <Container isOpen={state.isMenuOpen}>
      <Header>
        <Link href="/" passHref replace>
          <Brand onClick={() => dispatch({type: TOGGLE_MENU})} />
        </Link>
        <CloseIcon onClick={() => dispatch({type: TOGGLE_MENU})} />
      </Header>
      <Menu>
        {state.navOptions.map((option, idx) => (
          <Link passHref key={idx} href="#" replace>
            <Option
              onClick={() => dispatch({type: TOGGLE_SUBMENU, payload: option})}
            >
              {option}
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
