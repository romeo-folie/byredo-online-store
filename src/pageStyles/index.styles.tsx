import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  display: flex;
`;

export const CategorySection = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  padding-top: 70px;
  padding-left: 15px;
`;

export const ProductList = styled.div`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  padding-top: 70px;
  justify-content: space-between;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  /* background-color: yellow; */
`;

export const FilterColumn = styled.div`
  width: 15%;
  /* background-color: green; */
`;
