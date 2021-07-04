import {useContext} from "react";
import {NavContext, TOGGLE_SEARCH} from "../../context/nav.state";
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

const Search = () => {
  const {state, dispatch} = useContext(NavContext);

  return (
    <Container isOpen={state.isSearchOpen}>
      {/* Header here */}
      <Header>
        <Link href="/" passHref replace>
          <Brand onClick={() => dispatch({type: TOGGLE_SEARCH})} />
        </Link>

        <Menu>
          {state.navOptions.map((opt, idx) => (
            <NavItem
              key={idx}
              // onClick={handleClick}
              // active={activeOption === opt}
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
          {/* <Message>Sorry, no results found</Message> */}
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </Items>
      </ContentWrap>
    </Container>
  );
};

export default Search;
