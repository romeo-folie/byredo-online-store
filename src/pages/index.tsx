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
import {useNavState, SET_NAV_OPTION} from "../context/nav.state";
import {useProductState, FILTER_PRODUCTS, SORT_PRODUCTS} from "../context/product.state";
import {useState, useEffect} from "react";
import FullScreenLoader from "../components/full-screen-loader/full-screen-loader.component";
import Head from "next/head";
import {motion} from "framer-motion";



const Home: React.FC = () => {
  const {state, dispatch} = useNavState();
  const {productState, productDispatch} = useProductState();
  const [loadedImages, setLoadedImages] = useState(0);

  const targetImagesCount = Math.min(productState.filteredProducts.length, 6);
  const isReady = !productState.loading && (loadedImages >= targetImagesCount || targetImagesCount === 0);

  useEffect(() => {
    setLoadedImages(0);
  }, [state.activeNavOption, state.subMenuOption]);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch({type: SET_NAV_OPTION, payload: value});
    productDispatch({type: FILTER_PRODUCTS, payload: value});
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    productDispatch({type: SORT_PRODUCTS, payload: value});
  };

  return (
    <>
      <FullScreenLoader isLoading={!isReady} />
      <Container>
      <Head>
        <title>Shop | Byredo</title>
      </Head>
      <CategorySection>
        {state.categories.map((cat, idx) => (
          <CategoryList title={cat.title} items={cat.items} key={idx} />
        ))}
      </CategorySection>
      <ProductSection>
        <Grid>
          {productState.filteredProducts.map((prod, idx) => (
            <Product
              path={prod.url}
              name={prod.name}
              price={prod.price}
              id={prod.id}
              key={prod.id}
              onLoad={() => setLoadedImages(prev => prev + 1)}
            />
          ))}
        </Grid>
      </ProductSection>
      <FilterSection>
        <Selector 
          name="Filter" 
          options={["All", "Perfume", "Cologne", "Oil", "Accessories"]} 
          onChange={handleFilter}
        />
        <Selector 
          name="Sort" 
          options={["Price low to high", "Price high to low", "Name A-Z", "Name Z-A"]} 
          onChange={handleSort}
        />
      </FilterSection>
      <Title>
        {state.activeNavOption}{" "}
        {state.subMenuOption ? " / " + state.subMenuOption : ""}
      </Title>
    </Container>
    </>
  );
};

export default Home;
