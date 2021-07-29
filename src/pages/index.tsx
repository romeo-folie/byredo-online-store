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

const GridWithSpinner = WithSpinner(Grid);

const Home: React.FC = () => {
  const {state} = useNavState();
  const {productState, productDispatch} = useProductState();

  return (
    <Container>
      <CategorySection>
        {state.categories.map((cat, idx) => (
          <CategoryList title={cat.title} items={cat.items} key={idx} />
        ))}
      </CategorySection>
      <ProductSection>
        <GridWithSpinner>
          {productState.filteredProducts.map((prod, idx) => (
            <Product
              path={prod.url}
              name={prod.name}
              price={prod.price}
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
  );
};

export default Home;
