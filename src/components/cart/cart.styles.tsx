import styled from "styled-components";
import Back from "../../../public/vectors/chevron-left.svg";
import {CartButton} from "../../pageStyles/products/product.styles";

export const Overlay = styled.div<{isOpen?: boolean}>`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 60;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({isOpen}) => (isOpen ? "block" : "none")};
  transition: all 0.5s;
`;

export const Container = styled.div<{isOpen?: boolean}>`
  height: 100vh;
  width: ${({isOpen}) => (isOpen ? "80%" : "0")};
  z-index: 70;
  position: absolute;
  overflow: hidden;
  display: ${({isOpen}) => (isOpen ? "block" : "hidden")};
  right: ${({isOpen}) => (isOpen ? "0" : "-50px")};
  transition: all 0.5s;
  background-color: #ffffff;
  display: flex;

  @media only screen and (max-width: 1024px) {
    width: ${({isOpen}) => (isOpen ? "100%" : "0")};
  }
`;

export const ItemSection = styled.div`
  height: 100%;
  width: 70%;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SummarySection = styled.div`
  height: 100%;
  width: 30%;
  padding: 15px 20px;
  background-color: ${({theme}) => theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const BackIcon = styled(Back)`
  stroke: rgba(0, 0, 0, 0.5);
`;

export const BackLink = styled.a`
  text-transform: uppercase;
  display: inherit;
  align-items: inherit;
`;

export const BackText = styled.span`
  padding-top: 4px;
  font-size: 0.9rem;
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.5);
`;

export const TitleRow = styled(Row)`
  align-items: baseline;
  justify-content: space-between;
`;

export const ItemSectionTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: normal;
  margin: 0;

  @media only screen and (min-width: 1600px){
    font-size: 2.5rem;
  }
`;

export const ItemCount = styled.span`
  text-transform: uppercase;
  font-size: 0.9rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.1rem;
  }
`;

export const TableRow = styled(Row)`
  margin-bottom: 10px;
`;

export const THeader = styled.span<{flex: number}>`
  flex: ${({flex}) => flex};
  font-size: 1.05rem;
  color: rgba(0, 0, 0, 0.6);

  @media only screen and (min-width: 1600px) {
    font-size: 1.2rem;
  }
`;

export const Items = styled.div`
  height: 95%;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Note = styled.div`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
`;

export const SummarySectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0;

  @media only screen and (min-width: 1600px){
    font-size: 1.7rem;
  }
`;

export const CloseRow = styled(Row)`
  justify-content: flex-end;
  margin-bottom: 16px;
`;

export const CostRow = styled(Row)`
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  &:nth-of-type(4) {
    margin-top: 40px;
  }

  &:nth-of-type(5) {
    margin-top: 100%;
  }
`;

export const CostDetails = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DetName = styled.span`
  font-size: 1.1rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }
`;

export const DetValue = styled.span`
  font-weight: bold;
  font-size: 1.1rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }
`;

export const PromoCodeInput = styled.input`
  border: none;
  outline: none;
  width: 90px;
  background: transparent;
  padding-left: 8px;
  font-size: 1.1rem;

  @media only screen and (min-width: 1600px) {
    width: 95px;
    font-size: 1.2rem;
  }
`;

export const TotalSect = styled.div`
  margin-top: 100%;
`;

export const Table = styled.div`
  height: 70%;
`;

export const CheckoutBtn = styled(CartButton)`
  background-color: ${({theme}) => theme.accent};
  color: ${({theme}) => theme.secondary};
  margin: 0;
`;

export const Upper = styled.div``;
