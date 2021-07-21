import {useContext, MouseEvent} from "react";
import {
  NavContext,
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
import Link from "next/link";
import {useRouter} from "next/router";

const Search = () => {
  const {state, dispatch} = useContext(NavContext);
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {innerText} = e.target as HTMLAnchorElement;
    dispatch({type: SET_NAV_OPTION, payload: innerText});
  };

  return (
    <Container isOpen={state.isSearchOpen}>
      <Header>
        {/* <Link href="/" passHref replace> */}
        <Brand
          onClick={() => {
            dispatch({type: TOGGLE_SEARCH});
            router.replace("/");
          }}
        />
        {/* </Link> */}

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
          <Input placeholder="Search" />
        </InputWrap>
        <Items>
          {/* <Message>No results found</Message> */}
          <SearchItem />
        </Items>
      </ContentWrap>
    </Container>
  );
};

export default Search;
