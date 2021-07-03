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

const productDetails = [
  {name: "Top", desc: "African Marigold, Bergamot, Bucchu, Lemon, Neroli"},
  {name: "Heart", desc: "Cyclamen, Jasmine, Petals, Violet"},
  {name: "Base", desc: "Black Amber, Moroccan Cedarwood, Musk, Vetiver"},
  {name: "Shipping", desc: "Enter zip code"},
];

const colors = ["#d6cf86", "#9bafd0", "#414345", "#b29495", "#9bafd4"];

const ProductPage = () => {
  return (
    <Container>
      <DescSection>
        <ProdType>Eyewear</ProdType>
        <ProdName>{"The Bohemian"}</ProdName>
        <ProdDesc>
          {
            "A warm and romantic vetiver inspired by Paris in the late 20's and it's infatuation with African culture, art, music and dance. A mix of Parisian avantgardism and African culture shaped a unique and vibrant expression. The intense life, the excess and euphoria is illustrated by Bal d'Afrique's neroli, African marigold and Moroccan cedarwood."
          }{" "}
        </ProdDesc>
      </DescSection>
      <ProductSection>
        <ProdImage src="/images/products/isono_byredo_210414-215_kopia__1440x16401500x1680-removebg-preview.png" />
      </ProductSection>
      <DetailSection>
        {/* Add name and prod type here. Hide till we're in mobile mode */}
        <Type>Eyewear</Type>
        <Name>The Bohemian</Name>
        <PriceRow>
          <Price>{"$ 140"}</Price>
          <Row>
            {/* <Size>225 ml</Size>
            <Size>450 ml</Size> */}
            <ColorSelector colors={colors} />
          </Row>
        </PriceRow>
        {productDetails.map((detail) => (
          <DetailRow key={detail.name}>
            <DetailName>{detail.name}</DetailName>
            <DetailDesc>{detail.desc}</DetailDesc>
          </DetailRow>
        ))}
        <CartButton>Add To Cart</CartButton>
      </DetailSection>
    </Container>
  );
};

export default ProductPage;
