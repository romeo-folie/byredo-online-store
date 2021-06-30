import {useContext} from "react";
import CategoryList from "../components/category-list/category-list.component";
import {
  Container,
  CategorySection,
  ProductSection,
  Grid,
  FilterSection,
  Title,
} from "../pageStyles/index.styles";
import Product from "../components/product/product.component";
import Selector from "../components/selector/selector.component";
import {MenuContext} from "../context/menu.state";

const products = [
  {
    path: "/images/products/mob_blanche-body-wash_1-removebg-preview.png",
    title: "Blanche Body Wash",
    price: "50",
  },
  {
    path: "/images/products/mob-casablancalily-removebg-preview.png",
    title: "Casablancalily",
    price: 30,
  },
  {
    path: "/images/products/mob_blanche-hand-cream-30-ml-removebg-preview.png",
    title: "Blanche Hand Cream",
    price: "60",
  },
  {
    path: "/images/products/mob_suede_handwash-removebg-preview.png",
    title: "Suede Hand Wash",
    price: "70",
  },
  {
    path: "/images/products/mob_mmink_edp-100_a-removebg-preview.png",
    title: "M/Mink",
    price: "40",
  },
  {
    path: "/images/products/mob_bal-d-afrique-perfumed-oil-7-5-ml_1-removebg-preview.png",
    title: "Bal d'afrique",
    price: "50",
  },

  {
    path: "/images/products/isono_byredo_210414-215_kopia__1440x16401500x1680-removebg-preview.png",
    title: "Isono",
    price: "80",
  },

  {
    path: "/images/products/1996-removebg-preview.png",
    title: "1996",
    price: "40",
  },
  {
    path: "/images/products/takenaka_byredo_210414-342_1440x16401500x1680-removebg-preview.png",
    title: "Takenaka",
    price: "120",
  },
  {
    path: "/images/products/mob_la-selection-nomade-3x12-ml_1_1-removebg-preview.png",
    title: "La selection nomade",
    price: "30",
  },
  {
    path: "/images/products/edp_trvx_1500x1680-removebg-preview.png",
    title: "EDP TRAVX",
    price: "40",
  },
  {
    path: "/images/products/br_colour_stick_open_1500x1680_chin_of_gold_1-removebg-preview.png",
    title: "Chin of Gold",
    price: "80",
  },
  {
    path: "/images/products/mob_bibliothequeandle-240-g_1-removebg-preview.png",
    title: "Bibliotheque Candle",
    price: "20",
  },
  {
    path: "/images/products/desk_OpenSky_EDP-100_D-removebg-preview.png",
    title: "Dark OpenSky",
    price: "40",
  },
  {
    path: "/images/products/br_1500x1680_lip_balm_1-removebg-preview.png",
    title: "Lip Balm",
    price: "20",
  },
  {
    path: "/images/products/good_one_mob-tobaccomandarin_1_-removebg-preview.png",
    title: "Tobacco Mandarin",
    price: "40",
  },
];

const Home: React.FC = () => {
  const {state} = useContext(MenuContext);

  return (
    <Container>
      <CategorySection>
        {state.categories.map((cat, idx) => (
          <CategoryList title={cat.title} items={cat.items} key={idx} />
        ))}
      </CategorySection>
      <ProductSection>
        <Grid>
          {products.map((prod, idx) => (
            <Product
              path={prod.path}
              title={prod.title}
              price={prod.price}
              key={prod.path}
            />
          ))}
        </Grid>
      </ProductSection>
      <FilterSection>
        <Selector name="Filter" />
        <Selector name="Sort" />
      </FilterSection>
      <Title>Perfume / New arrivals</Title>
    </Container>
  );
};

export default Home;
