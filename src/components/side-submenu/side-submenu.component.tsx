import {useContext} from "react";
import {
  Container,
  Header,
  TitleWrap,
  ArrowIcon,
  Title,
} from "./side-submenu.styles";
import {CloseIcon} from "../side-menu/side-menu.styles";
import {
  MenuContext,
  TOGGLE_MENU,
  TOGGLE_SUBMENU,
} from "../../context/sidemenu.state";

const SideSubMenu = () => {
  const {state, dispatch} = useContext(MenuContext);

  const handleSubMenuClose = () => {
    dispatch({type: TOGGLE_MENU});
    dispatch({type: TOGGLE_SUBMENU});
  };

  return (
    <Container isOpen={state.isSubMenuOpen}>
      <Header>
        <TitleWrap>
          <ArrowIcon onClick={() => dispatch({type: TOGGLE_SUBMENU})} />
          <Title>Perfume</Title>
        </TitleWrap>
        <CloseIcon onClick={handleSubMenuClose} />
      </Header>
    </Container>
  );
};

export default SideSubMenu;
