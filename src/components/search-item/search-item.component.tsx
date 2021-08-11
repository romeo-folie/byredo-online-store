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
import {useNavState, TOGGLE_SEARCH} from "../../context/nav.state";
import {useRouter} from "next/router";

interface Props {
  product: IProduct;
}

const SearchItem: React.FC<Props> = ({product}) => {
  const {dispatch} = useNavState();
  const {id, name, size, type, price, url} = product;
  const router = useRouter();

  return (
    <Container
      onClick={() => {
        dispatch({type: TOGGLE_SEARCH});
        router.push(`/products/${id}`);
      }}
    >
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
