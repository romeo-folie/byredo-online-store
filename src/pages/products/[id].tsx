import {
  Container,
  DescSection,
  ProdType,
  ProdName,
  ProdDesc,
  ProductSection,
  ImageContainer,
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
import Head from 'next/head'
import Image from "next/image";
import {motion} from "framer-motion";
import {getOptimizedUrl} from "../../utils/cloudinary";

const getProductDetails = (type: string) => {
  const defaults = [
    {name: "Top", desc: "African Marigold, Bergamot, Bucchu, Lemon, Neroli"},
    {name: "Heart", desc: "Cyclamen, Jasmine, Petals, Violet"},
    {name: "Base", desc: "Black Amber, Moroccan Cedarwood, Musk, Vetiver"},
    {name: "Shipping", desc: "Europe Standard (3-5 days)"},
  ];

  if (type === "Perfume") {
    return [
      {name: "Top", desc: "Pink Pepper, Raspberry, Rose Berries"},
      {name: "Heart", desc: "Magnolia, Rose, Peony"},
      {name: "Base", desc: "Exotic Woods, Patchouli, Saffron"},
      {name: "Shipping", desc: "Europe Standard (3-5 days)"},
    ];
  }

  if (type === "Cologne") {
    return [
      {name: "Top", desc: "Lemon, Neroli, Bergamot"},
      {name: "Heart", desc: "Lavender, Rosemary, Jasmine"},
      {name: "Base", desc: "Amber, Musk, Moss"},
      {name: "Shipping", desc: "Europe Standard (3-5 days)"},
    ];
  }

  return defaults;
};

const colors = ["#d6cf86", "#9bafd0", "#414345", "#b29495", "#9bafd4"];

interface Props {
  product: IProduct;
}

const ProductPage: React.FC<Props> = ({product}) => {
  const {productDispatch} = useProductState();
  const productDetails = getProductDetails(product.type);

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: {opacity: 0, x: -20},
    visible: {opacity: 1, x: 0, transition: {duration: 0.6}},
  } as const;

  const detailVariants = {
    hidden: {opacity: 0, x: 20},
    visible: {opacity: 1, x: 0, transition: {duration: 0.6}},
  } as const;

  const optimizedUrl = getOptimizedUrl(product.url, 1000);

  return (
    <Container>
      <Head>
        <title>{product.name} | Byredo</title>
      </Head>
      <DescSection>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <ProdType>{product.type}</ProdType>
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProdName>{product.name}</ProdName>
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProdDesc>
              {
                "A warm and romantic vetiver inspired by Paris in the late 20's and it's infatuation with African culture, art, music and dance. A mix of Parisian avantgardism and African culture shaped a unique and vibrant expression. The intense life, the excess and euphoria is illustrated by Bal d'Afrique's neroli, African marigold and Moroccan cedarwood."
              }{" "}
            </ProdDesc>
          </motion.div>
        </motion.div>
      </DescSection>
      <ProductSection>
        <motion.div
          style={{width: "100%", display: "flex", justifyContent: "center"}}
        >
          <ImageContainer>
            <motion.img
              layoutId={product.id}
              src={optimizedUrl}
              alt={product.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </ImageContainer>
        </motion.div>
      </ProductSection>
      <DetailSection>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Add name and prod type here. Hide till we're in mobile mode */}
          <motion.div variants={detailVariants}>
            <Type>{product.type}</Type>
          </motion.div>
          <motion.div variants={detailVariants}>
            <Name>{product.name}</Name>
          </motion.div>
          <motion.div variants={detailVariants}>
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
          </motion.div>
          {productDetails.map((detail, idx) => (
            <motion.div variants={detailVariants} key={detail.name}>
              <DetailRow>
                <DetailName>{detail.name}</DetailName>
                <DetailDesc>{detail.desc}</DetailDesc>
              </DetailRow>
            </motion.div>
          ))}
          <motion.div variants={detailVariants} style={{marginTop: "40px"}}>
            <CartButton
              onClick={() => productDispatch({type: ADD_TO_CART, payload: product})}
            >
              Add To Cart
            </CartButton>
          </motion.div>
        </motion.div>
      </DetailSection>
    </Container>
  );
};

import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export const getStaticPaths: GetStaticPaths = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const paths = querySnapshot.docs.map((doc) => {
    return {
      params: {id: doc.id},
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params!;
  const docSnap = await getDoc(doc(db, "products", params.id as string));

  if (!docSnap.exists()) {
    return {
      notFound: true,
    };
  }

  const product = {id: params.id, ...docSnap.data()};

  return {
    props: {product},
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
};

export default ProductPage;

