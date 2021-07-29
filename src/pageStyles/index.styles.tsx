import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({theme}) => theme.primary};
  display: flex;

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const CategorySection = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  padding-top: 70px;
  padding-left: 15px;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 1600px) {
    padding-top: 90px;
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ProductSection = styled.div`
  width: 65%;
  height: 100%;
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
  }
`;

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 230px));
  grid-gap: 15px;
  justify-content: center;

  @media only screen and (min-width: 1600px) {
    grid-column-gap: 130px;
    grid-row-gap: 20px;
  }
`;

export const FilterSection = styled.div`
  padding-top: 80px;
  /* padding-right: 15px; */
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
    padding-right: 15px;
    justify-content: space-between;
    padding-top: 0;
    /* padding-top: 85px; */
  }
`;

export const Title = styled.h3`
  font-weight: normal;
  font-size: 1.4rem;
  margin-top: 75px;
  padding-left: 15px;
  /* text-align: center; */

  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;
