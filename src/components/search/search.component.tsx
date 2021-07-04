import {useContext} from "react";
import {MenuContext} from "../../context/menu.state";
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
} from "./search.styles";
import {Brand, CloseIcon} from "../side-menu/side-menu.styles";
import SearchItem from "../search-item/search-item.component";
import NavItem from "../nav-item/nav-item.component";
import Link from "next/link";

const Search = () => {
  const {state, dispatch} = useContext(MenuContext);

  return (
    <Container isOpen>
      {/* Header here */}
      <Header>
        <Link href="/" passHref replace>
          <Brand />
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

        <CloseIcon />
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
