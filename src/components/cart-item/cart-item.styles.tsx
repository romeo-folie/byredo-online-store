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
`;

export const Description = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProdName = styled.span`
  font-size: 1.2rem;
  margin-bottom: 10px;

  @media only screen and (min-width: 1600px){
    font-size: 1.4rem;
  }
`;

export const ProdType = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;

  @media only screen and (min-width: 1600px){
    font-size: 1rem;
  }
`;

export const ProdSize = styled.span`
  width: 20%;
  font-size: 1.1rem;

  @media only screen and (min-width: 1600px){
    font-size: 1.3rem;
  }
`;

export const ProdQty = styled.span`
  width: 20%;
  display: flex;
  align-items: center;
  font-size: 1.1rem;

  @media only screen and (min-width: 1600px){
    font-size: 1.3rem;
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
`;

export const Qty = styled.span`
  margin: 3px 10px 0;
`;

export const Price = styled.span`
  margin-right: 40px;
  font-size: 1.1rem;

  @media only screen and (min-width: 1600px){
    font-size: 1.3rem;
  }
`;

export const RemoveIcon = styled(X)`
  margin-bottom: 4px;
  cursor: pointer;
`;
