import CategoryList from "../components/category-list/category-list.component";
import {
  Container,
  CategorySection,
  ProductList,
  FilterColumn,
} from "../pageStyles/index.styles";
import ShopItem from "../components/shop-item/shop-item.component";

const categories = [
  {title: "Explore", items: ["Best Sellers", "New Arrivals", "Gift Cards"]},
  {
    title: "Personal Fragrances",
    items: [
      "Perfumes",
      "Travel editions",
      "Hair Perfumes",
      "Roll-on perfumed oils",
      "Perfume extracts",
    ],
  },
  {
    title: "Scents",
    items: [
      "Bal d'afrique",
      "Biblioteque",
      "Blanche",
      "Eleventh Hour",
      "Gypsy Water",
      "La Tulipe",
      "Mojave Ghost",
      "Rose of No Man's Land",
      "Super Cedar",
      "Velvet Haze",
    ],
  },
];

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
    path: "/images/products/mob_bibliothequeandle-240-g_1-removebg-preview.png",
    title: "Bibliotheque Candle",
    price: "20",
  },
  {
    path: "/images/products/mob_la-selection-nomade-3x12-ml_1_1-removebg-preview.png",
    title: "La selection nomade",
    price: "30",
  },
  {
    path: "/images/products/mob_mmink_edp-100_a-removebg-preview.png",
    title: "M/Mink",
    price: "40",
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
  return (
    <Container>
      <CategorySection>
        {categories.map((cat, idx) => (
          <CategoryList title={cat.title} items={cat.items} key={idx} />
        ))}
      </CategorySection>
      <ProductList>
        {products.map((prod, idx) => (
          <ShopItem
            path={prod.path}
            title={prod.title}
            price={prod.price}
            key={prod.path}
          />
        ))}
      </ProductList>
      <FilterColumn />
    </Container>
  );
};

export default Home;
