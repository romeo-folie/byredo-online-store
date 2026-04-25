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
import {collection, getDocs, doc, getDoc} from "firebase/firestore";
import {GetStaticPaths, GetStaticProps} from "next";
import {
  useProductState,
  IProduct,
  ADD_TO_CART,
} from "../../context/product.state";
import Head from 'next/head';
import { motion } from "framer-motion";
import { useEffect } from "react";
import {getOptimizedUrl} from "../../utils/cloudinary";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
};

const imageTransition = {
  type: "spring",
  stiffness: 200,
  damping: 28,
};

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
  const optimizedUrl = getOptimizedUrl(product.url, 1000);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.35, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    >
      <Container>
        <Head>
          <title>{product.name}</title>
        </Head>
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
          <ProdImage layoutId={product.id} src={optimizedUrl} transition={imageTransition} />
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
    </motion.div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const snapshot = await getDocs(collection(db, "products"));
  const paths = snapshot.docs.map((d) => ({params: {id: d.id}}));
  return {paths, fallback: false};
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params!;
  const snapshot = await getDoc(doc(db, "products", params.id as string));
  const product = {id: params.id, ...snapshot.data()};
  return {props: {product}, revalidate: 1};
};

export default ProductPage;
