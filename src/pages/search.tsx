import {
  Container,
  ContentWrap,
  InputWrap,
  Input,
  SearchIcon,
  Items,
  Message,
} from "../pageStyles/search.styles";
import SearchItem from "../components/search-item/search-item.component";

const Search = () => {
  return (
    <Container>
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
