import {IProduct} from "../../context/product.state";
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

interface Props {
  product: IProduct;
}

const SearchItem: React.FC<Props> = ({product}) => {
  const {name, size, type, price, url} = product;

  return (
    <Container>
      <Thumbnail src={url} />
      <Description>
        <ProdName>{name}</ProdName>
        <SpacedRow>
          <Row>
            <ProdSizeM>{size}ml</ProdSizeM>
            <ProdType>{type}</ProdType>
          </Row>
          <PriceM>${price}</PriceM>
        </SpacedRow>
      </Description>
      <ProdSize>{size}ml</ProdSize>
      <Price>${price}</Price>
    </Container>
  );
};

export default SearchItem;
