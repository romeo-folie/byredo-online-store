import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

export const Thumbnail = styled.img`
  width: 12%;
  filter: drop-shadow(12px 8px 4px rgba(0, 0, 0, 0.2));
`;

export const Description = styled.div`
  width: 28%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* margin-left: 10px; */
  padding-top: 18px;
`;

export const ProdName = styled.span`
  font-size: 1.5rem;
  margin-bottom: 13px;
`;

export const ProdType = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const ProdSize = styled.span`
  width: 20%;
  padding-top: 18px;
`;

export const ProdQty = styled.span`
  width: 20%;
  display: flex;
  padding-top: 18px;
`;

export const QtyBtn = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Qty = styled.span`
  margin: 0 10px;
`;

export const Price = styled.span`
  padding-top: 18px;
`;
