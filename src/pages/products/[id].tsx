import {
  Container,
  DescSection,
  ProdType,
  ProdName,
  ProdDesc,
  ProductSection,
  ProdImage,
  DetailSection,
  PriceRow,
  Price,
  Size,
  DetailRow,
  DetailName,
  DetailDesc,
  CartButton,
  Name,
  Type,
  Row,
  ImageWrap,
} from "../../pageStyles/products/product.styles";
import ColorSelector from "../../components/color-selector/color-selector.component";
import db from "../../services/firebase/firestore";
import {GetStaticPaths, GetStaticProps} from "next";
import {
  useProductState,
  IProduct,
  ADD_TO_CART,
} from "../../context/product.state";

const productDetails = [
  {name: "Top", desc: "African Marigold, Bergamot, Bucchu, Lemon, Neroli"},
  {name: "Heart", desc: "Cyclamen, Jasmine, Petals, Violet"},
  {name: "Base", desc: "Black Amber, Moroccan Cedarwood, Musk, Vetiver"},
  {name: "Shipping", desc: "Enter zip code"},
];

const colors = ["#d6cf86", "#9bafd0", "#414345", "#b29495", "#9bafd4"];

interface Props {
  product: IProduct;
}

const ProductPage: React.FC<Props> = ({product}) => {
  const {productDispatch} = useProductState();

  return (
    <Container>
      <DescSection>
        <ProdType>{product.type}</ProdType>
        <ProdName>{product.name}</ProdName>
        <ProdDesc>
          {
            "A warm and romantic vetiver inspired by Paris in the late 20's and it's infatuation with African culture, art, music and dance. A mix of Parisian avantgardism and African culture shaped a unique and vibrant expression. The intense life, the excess and euphoria is illustrated by Bal d'Afrique's neroli, African marigold and Moroccan cedarwood."
          }{" "}
        </ProdDesc>
      </DescSection>
      <ProductSection>
        <ProdImage src={product.url} />
      </ProductSection>
      <DetailSection>
        {/* Add name and prod type here. Hide till we're in mobile mode */}
        <Type>{product.type}</Type>
        <Name>{product.name}</Name>
        <PriceRow>
          <Price>{`$${product.price}`}</Price>
          <Row>
            {product.size ? (
              <>
                <Size>{product.size} ml</Size>
                {product.size !== "225" ? <Size>225 ml</Size> : null}
              </>
            ) : (
              <ColorSelector colors={colors} />
            )}
          </Row>
        </PriceRow>
        {productDetails.map((detail) => (
          <DetailRow key={detail.name}>
            <DetailName>{detail.name}</DetailName>
            <DetailDesc>{detail.desc}</DetailDesc>
          </DetailRow>
        ))}
        <CartButton
          onClick={() => productDispatch({type: ADD_TO_CART, payload: product})}
        >
          Add To Cart
        </CartButton>
      </DetailSection>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await db.collection("products").get();
  const paths = response.docs.map((doc) => {
    return {
      params: {id: doc.id},
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params!;
  const response = await db
    .collection("products")
    .doc(params.id as string)
    .get();

  const product = {id: params.id, ...response.data()};

  return {
    props: {product},
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
};

export default ProductPage;
