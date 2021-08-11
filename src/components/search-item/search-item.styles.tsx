import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const SpacedRow = styled(Row)`
  justify-content: space-between;
`;

export const Thumbnail = styled.img`
  width: 15%;
  filter: drop-shadow(12px 8px 4px rgba(0, 0, 0, 0.2));

  @media only screen and (max-width: 600px) {
    width: 25%;
  }

  @media only screen and (max-width: 480px) {
    width: 30%;
  }
`;

export const Description = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;

  @media only screen and (max-width: 600px) {
    width: 35%;
  }

  @media only screen and (max-width: 480px) {
    padding-left: 0;
    width: 70%;
  }
`;

export const ProdName = styled.span`
  font-size: 1.3rem;
  margin-bottom: 10px;

  @media only screen and (min-width: 1600px) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.15rem;
  }
`;

export const ProdType = styled.span`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.5);

  @media only screen and (min-width: 1600px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ProdSize = styled.span`
  width: 20%;
  font-size: 1.1rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const ProdSizeM = styled.span`
  color: rgba(0, 0, 0, 0.5);
  margin-right: 20px;
  font-size: 0.9rem;

  @media only screen and (min-width: 481px) {
    display: none;
  }
`;

export const Price = styled.span`
  width: 20%;
  font-size: 1.1rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const PriceM = styled.span`
  font-size: 1rem;

  @media only screen and (min-width: 481px) {
    display: none;
  }
`;
