import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  display: flex;

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const CategorySection = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  padding-top: 70px;
  padding-left: 15px;
  @media only screen and (min-width: 1600px) {
    padding-top: 90px;
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ProductSection = styled.div`
  width: 65%;
  padding-top: 70px;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  /* background-color: yellow; */
  @media only screen and (min-width: 1600px) {
    padding-top: 90px;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding-top: 0;
    /* margin-top: 10px; */
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 230px));
  grid-column-gap: 15px;
  grid-row-gap: 5px;
  justify-content: center;

  @media only screen and (min-width: 1600px) {
    grid-column-gap: 30px;
    grid-row-gap: 20px;
  }
`;

export const FilterSection = styled.div`
  padding-top: 70px;
  padding-right: 15px;
  width: 15%;
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  /* background-color: green; */

  @media only screen and (min-width: 1600px) {
    padding-top: 90px;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 15px;
    padding-right: 25px;
    justify-content: space-around;
    padding-top: 85px;
  }
`;
