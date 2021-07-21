import {useContext, MouseEvent} from "react";
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
  SET_NAV_OPTION,
} from "../../context/nav.state";
import Link from "next/link";
import {useRouter} from "next/router";

const SideMenu = () => {
  const {state, dispatch} = useContext(NavContext);
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {innerText} = e.target as HTMLAnchorElement;
    dispatch({type: SET_NAV_OPTION, payload: innerText});
    dispatch({type: TOGGLE_SUBMENU});
  };

  return (
    <Container isOpen={state.isMenuOpen}>
      <Header>
        <Brand
          onClick={() => {
            router.replace("/");
            dispatch({type: TOGGLE_MENU});
          }}
        />
        <CloseIcon onClick={() => dispatch({type: TOGGLE_MENU})} />
      </Header>
      <Menu>
        {state.navOptions.map((option, idx) => (
          <Link passHref key={idx} href="#" replace>
            <Option onClick={handleClick}>{option}</Option>
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
