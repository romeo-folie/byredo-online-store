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
import {useNavState} from "../context/nav.state";
import {useProductState} from "../context/product.state";
import WithSpinner from "../components/with-spinner/with-spinner.component";
import Head from "next/head";
import { motion } from "framer-motion";

const GridWithSpinner = WithSpinner(Grid);

const Home: React.FC = () => {
  const {state} = useNavState();
  const {productState, productDispatch} = useProductState();

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.35, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    >
      <Container>
        <Head>
          <title>Shop</title>
        </Head>
        <CategorySection>
          {state.categories.map((cat, idx) => (
            <CategoryList title={cat.title} items={cat.items} key={idx} />
          ))}
        </CategorySection>
        <ProductSection>
          <GridWithSpinner>
            {productState.filteredProducts.map((prod) => (
              <Product
                path={prod.url}
                name={prod.name}
                price={prod.price}
                id={prod.id}
                key={prod.id}
              />
            ))}
          </GridWithSpinner>
        </ProductSection>
        <FilterSection>
          <Selector name="Filter" />
          <Selector name="Sort" />
        </FilterSection>
        <Title>
          {state.activeNavOption}{" "}
          {state.subMenuOption ? " / " + state.subMenuOption : ""}
        </Title>
      </Container>
    </motion.div>
  );
};

export default Home;
