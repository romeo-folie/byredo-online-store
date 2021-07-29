import {MouseEvent} from "react";
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
  useNavState,
  TOGGLE_MENU,
  TOGGLE_SUBMENU,
  SET_NAV_OPTION,
} from "../../context/nav.state";
import {useRouter} from "next/router";
import {useProductState, FILTER_PRODUCTS} from "../../context/product.state";

const SideMenu = () => {
  const {state, dispatch} = useNavState();
  const {productState, productDispatch} = useProductState();
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {innerText} = e.target as HTMLAnchorElement;
    dispatch({type: SET_NAV_OPTION, payload: innerText});
    productDispatch({type: FILTER_PRODUCTS, payload: innerText});
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
          <Option onClick={handleClick} key={idx}>
            {option}
          </Option>
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
