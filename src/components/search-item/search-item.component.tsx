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
import {motion} from "framer-motion";

const itemVariants = {
  hidden: {opacity: 0, y: 30},
  show: {opacity: 1, y: 0, transition: {type: "spring", stiffness: 300, damping: 24}}
} as const;

interface Props {
  product: IProduct;
}

const SearchItem: React.FC<Props> = ({product}) => {
  const {dispatch} = useNavState();
  const {id, name, size, type, price, url} = product;
  const router = useRouter();

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, x: 10 }}
      whileTap={{ scale: 0.98 }}
    >
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
            {size ? <ProdSizeM>{size}ml</ProdSizeM> : null}
            <ProdType>{type}</ProdType>
          </Row>
          <PriceM>${price}</PriceM>
        </SpacedRow>
      </Description>
      {size ? <ProdSize>{size}ml</ProdSize> : null}
      <Price>${price}</Price>
      </Container>
    </motion.div>
  );
};

export default SearchItem;
