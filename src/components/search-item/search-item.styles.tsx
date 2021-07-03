import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const Thumbnail = styled.img`
  width: 15%;
  filter: drop-shadow(12px 8px 4px rgba(0, 0, 0, 0.2));

  @media only screen and (max-width: 540px) {
    width: 30%;
  }
`;

export const Description = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  /* @media only screen and (max-width: 540px) {
    width: 60%;
  }

  @media only screen and (max-width: 420px) {
    width: 70%;
  } */
`;

export const ProdName = styled.span`
  font-size: 1.3rem;
  margin-bottom: 10px;

  /* @media only screen and (min-width: 1600px) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 540px) {
    display: none;
  } */
`;

export const ProdType = styled.span`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.5);

  /* @media only screen and (min-width: 1600px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 540px) {
    display: none;
  } */
`;

export const ProdSize = styled.span`
  width: 20%;
  font-size: 1.1rem;

  /* @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 540px) {
    display: none;
  } */
`;

export const Price = styled.span`
  width: 20%;
  font-size: 1.1rem;

  /* @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 540px) {
    display: none;
  } */
`;
