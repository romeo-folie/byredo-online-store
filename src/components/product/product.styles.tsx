import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  cursor: pointer;
  /* margin: 5px; */
`;

export const Photo = styled.img<{isHovered: boolean}>`
  transition: all 1.2s;
  max-width: ${({isHovered}) => (isHovered ? "270px" : "250px")};
  filter: drop-shadow(30px 15px 4px rgba(0, 0, 0, 0.1));

  @media only screen and (min-width: 1600px) {
    max-width: ${({isHovered}) => (isHovered ? "350px" : "330px")};
  }

  @media only screen and (max-width: 1024px) {
    max-width: ${({isHovered}) => (isHovered ? "240px" : "230px")};
  }
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 1.15rem;
  position: relative;
  bottom: 25px;

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }
`;

export const Price = styled.h3`
  font-weight: normal;
  margin-top: 0;
  font-size: 1.15rem;
  position: relative;
  bottom: 25px;

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }
`;
