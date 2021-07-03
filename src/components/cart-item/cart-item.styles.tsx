import styled from "styled-components";
import X from "../../../public/vectors/x-mini.svg";

export const Container = styled.div`
  display: flex;
  width: 100%;
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
  /* 
  @media only screen and (max-width: 480px) {
    width: 40%;
  } */
`;

export const Description = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media only screen and (max-width: 540px) {
    width: 60%;
  }

  @media only screen and (max-width: 420px) {
    width: 70%;
  }
`;

export const ProdName = styled.span`
  font-size: 1.2rem;
  margin-bottom: 10px;

  @media only screen and (min-width: 1600px) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

export const ProdNameM = styled.span`
  font-size: 1.1rem;

  @media only screen and (min-width: 541px) {
    display: none;
  }

  @media only screen and (min-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 4px;
  }
`;

export const SpacedRow = styled(Row)`
  justify-content: space-between;
`;

export const ProdType = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;

  @media only screen and (min-width: 1600px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

export const ProdTypeM = styled.span`
  font-size: 0.9rem;

  @media only screen and (min-width: 541px) {
    display: none;
  }

  /* @media only screen and (min-width: 480px) {
    font-size: 0.9rem;
  } */
`;

export const ProdSize = styled.span`
  width: 20%;
  font-size: 1.1rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

export const ProdSizeM = styled.span`
  font-size: 0.9rem;
  margin-right: 10px;
  @media only screen and (min-width: 541px) {
    display: none;
  }

  /* @media only screen and (min-width: 480px) {
    font-size: 0.9rem;
  } */
`;

export const ProdQty = styled.span`
  width: 20%;
  display: flex;
  align-items: center;
  font-size: 1.1rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

export const ProdQtyM = styled.span`
  display: flex;
  align-items: center;
  font-size: 1rem;

  @media only screen and (min-width: 541px) {
    display: none;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const QtyBtn = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media only screen and (max-width: 540px) {
    width: 14px;
    height: 14px;
  }
`;

export const Qty = styled.span`
  margin: 3px 10px 0;
`;

export const Price = styled.span`
  margin-right: 40px;
  font-size: 1.1rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

export const PriceM = styled.span`
  font-size: 1rem;

  @media only screen and (min-width: 541px) {
    display: none;
  }

  @media only screen and (min-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const RemoveIcon = styled(X)`
  margin-bottom: 4px;
  cursor: pointer;

  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

export const RemoveIconM = styled(X)`
  margin-bottom: 5px;
  @media only screen and (min-width: 541px) {
    display: none;
  }
`;
