import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import CategoryList from "../components/category-list/category-list.component";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  display: flex;
`;

const CategorySection = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  padding-top: 70px;
  padding-left: 15px;
`;

const ProductList = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  /* background-color: yellow; */
`;

const FilterColumn = styled.div`
  width: 20%;
  /* background-color: green; */
`;

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

const Home = () => {
  return (
    <Container>
      <CategorySection>
        {categories.map((cat, idx) => (
          <CategoryList title={cat.title} items={cat.items} key={idx} />
        ))}
      </CategorySection>
      <ProductList />
      <FilterColumn />
    </Container>
  );
};

export default Home;
