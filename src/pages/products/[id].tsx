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
import ColoredCircle from "../../components/colored-circle/colored-circle.component";

const productDetails = [
  {name: "Top", desc: "African Marigold, Bergamot, Bucchu, Lemon, Neroli"},
  {name: "Heart", desc: "Cyclamen, Jasmine, Petals, Violet"},
  {name: "Base", desc: "Black Amber, Moroccan Cedarwood, Musk, Vetiver"},
  {name: "Shipping", desc: "Enter zip code"},
];

const ProductPage = () => {
  return (
    <Container>
      <DescSection>
        <ProdType>Body Wash</ProdType>
        <ProdName>{"Bal d'Afrique"}</ProdName>
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
            <ColoredCircle color="#d6cf86" active />
            <ColoredCircle color="#9bafd0" />
            <ColoredCircle color="#414345" />
            <ColoredCircle color="#b29495" />
            <ColoredCircle color="#9bafd4" />
          </Row>
        </PriceRow>
        {productDetails.map((det) => (
          <DetailRow key={det.name}>
            <DetailName>{det.name}</DetailName>
            <DetailDesc>{det.desc}</DetailDesc>
          </DetailRow>
        ))}
        <CartButton>Add To Cart</CartButton>
      </DetailSection>
    </Container>
  );
};

export default ProductPage;
