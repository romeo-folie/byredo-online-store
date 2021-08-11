import {ChangeEvent, MouseEvent} from "react";
import {
  useNavState,
  TOGGLE_SEARCH,
  SET_NAV_OPTION,
} from "../../context/nav.state";
import {
  Container,
  ContentWrap,
  InputWrap,
  Input,
  SearchIcon,
  Items,
  Message,
  Header,
  Menu,
  Brand,
} from "./search.styles";
import {CloseIcon} from "../side-menu/side-menu.styles";
import SearchItem from "../search-item/search-item.component";
import NavItem from "../nav-item/nav-item.component";
import {useRouter} from "next/router";
import {SEARCH_PRODUCTS, useProductState} from "../../context/product.state";

const Search = () => {
  const {state, dispatch} = useNavState();
  const {productState, productDispatch} = useProductState();
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {innerText} = e.target as HTMLAnchorElement;
    dispatch({type: SET_NAV_OPTION, payload: innerText});
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    productDispatch({type: SEARCH_PRODUCTS, payload: e.target.value});
  };

  return (
    <Container isOpen={state.isSearchOpen}>
      <Header>
        <Brand
          onClick={() => {
            dispatch({type: TOGGLE_SEARCH});
            router.replace("/");
          }}
        />

        <Menu>
          {state.navOptions.map((opt, idx) => (
            <NavItem
              key={idx}
              onClick={handleClick}
              active={state.activeNavOption === opt}
            >
              {opt}
            </NavItem>
          ))}
        </Menu>

        <CloseIcon onClick={() => dispatch({type: TOGGLE_SEARCH})} />
      </Header>
      <ContentWrap>
        <InputWrap>
          <SearchIcon />
          <Input placeholder="Search" onChange={handleChange} />
        </InputWrap>
        <Items>
          {productState.searchResults.length ? (
            productState.searchResults.map((prod) => (
              <SearchItem product={prod} key={prod.id} />
            ))
          ) : (
            <Message>Nothing to show</Message>
          )}
        </Items>
      </ContentWrap>
    </Container>
  );
};

export default Search;
