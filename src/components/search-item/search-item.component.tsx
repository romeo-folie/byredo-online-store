import {
  Container,
  Thumbnail,
  Description,
  ProdName,
  ProdType,
  ProdSize,
  Price,
} from "../search-item/search-item.styles";

const SearchItem = () => {
  return (
    <Container>
      <Thumbnail src="/images/products/mob_blanche-body-wash_1-removebg-preview.png" />
      <Description>
        <ProdName>{"Blanche"}</ProdName>
        <ProdType>Body Wash</ProdType>
      </Description>
      <ProdSize>25ml</ProdSize>
      <Price>$25</Price>
    </Container>
  );
};

export default SearchItem;
