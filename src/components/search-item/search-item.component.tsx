import {
  Container,
  Thumbnail,
  Description,
  ProdName,
  ProdType,
  ProdSize,
  ProdSizeM,
  Price,
  PriceM,
  Row,
  SpacedRow,
} from "../search-item/search-item.styles";

const SearchItem = () => {
  return (
    <Container>
      <Thumbnail src="/images/products/mob_blanche-body-wash_1-removebg-preview.png" />
      <Description>
        <ProdName>{"Blanche"}</ProdName>
        <SpacedRow>
          <Row>
            <ProdSizeM>25ml</ProdSizeM>
            <ProdType>Body Wash</ProdType>
          </Row>
          <PriceM>$25</PriceM>
        </SpacedRow>
      </Description>
      <ProdSize>25ml</ProdSize>
      <Price>$25</Price>
    </Container>
  );
};

export default SearchItem;
