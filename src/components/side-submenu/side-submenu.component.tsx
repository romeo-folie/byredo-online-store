import {useContext} from "react";
import {
  Container,
  Header,
  TitleWrap,
  ArrowIcon,
  Title,
  Menu,
} from "./side-submenu.styles";
import {CloseIcon} from "../side-menu/side-menu.styles";
import {NavContext, TOGGLE_MENU, TOGGLE_SUBMENU} from "../../context/nav.state";
import CategoryList from "../category-list/category-list.component";

const SideSubMenu = () => {
  const {state, dispatch} = useContext(NavContext);

  const handleSubMenuClose = () => {
    dispatch({type: TOGGLE_MENU});
    dispatch({type: TOGGLE_SUBMENU});
  };

  return (
    <Container isOpen={state.isSubMenuOpen}>
      <Header>
        <TitleWrap>
          <ArrowIcon onClick={() => dispatch({type: TOGGLE_SUBMENU})} />
          <Title>{state.activeNavOption}</Title>
        </TitleWrap>
        <CloseIcon onClick={handleSubMenuClose} />
      </Header>
      <Menu>
        {state.categories.map((cat, idx) => (
          <CategoryList title={cat.title} items={cat.items} key={idx} />
        ))}
      </Menu>
    </Container>
  );
};

export default SideSubMenu;
