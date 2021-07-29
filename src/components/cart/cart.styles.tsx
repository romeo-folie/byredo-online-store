import styled from "styled-components";
import Back from "../../../public/vectors/chevron-left.svg";
import X from "../../../public/vectors/x.svg";
import {CartButton} from "../../pageStyles/products/product.styles";

export const Overlay = styled.div<{isOpen?: boolean}>`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 170;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({isOpen}) => (isOpen ? "block" : "none")};
  transition: all 0.3s;
`;

export const Container = styled.div<{isOpen?: boolean}>`
  height: 100vh;
  width: ${({isOpen}) => (isOpen ? "80%" : "0")};
  z-index: 180;
  position: absolute;
  overflow: hidden;
  right: ${({isOpen}) => (isOpen ? "0" : "-50px")};
  transition: all 0.3s;
  background-color: ${({theme}) => theme.secondary};
  display: flex;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    width: ${({isOpen}) => (isOpen ? "100%" : "0")};
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const ItemSection = styled.div`
  height: 100%;
  width: 70%;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    min-height: 60%;
  }
`;

export const SummarySection = styled.div`
  height: 100%;
  width: 30%;
  padding: 15px 20px;
  background-color: ${({theme}) => theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 40%;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const BackRow = styled(Row)`
  padding-top: 8px;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const BackIcon = styled(Back)`
  stroke: rgba(0, 0, 0, 0.5);
  margin-left: -6px;
`;

export const BackLink = styled.a`
  text-transform: uppercase;
  display: inherit;
  align-items: inherit;
  cursor: pointer;
`;

export const BackLinkM = styled(BackLink)`
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const BackText = styled.span`
  padding-top: 4px;
  font-size: 0.9rem;
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 1000px) {
    font-size: 0.85rem;
  }
`;

export const TitleRow = styled(Row)`
  align-items: baseline;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ItemSectionTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: normal;
  margin: 0;

  @media only screen and (min-width: 1600px) {
    font-size: 2.5rem;
  }
`;

export const SectionTitleM = styled(ItemSectionTitle)`
  margin-bottom: 15px;

  @media only screen and (min-width: 1000px) {
    display: none;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.3rem;
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

  @media only screen and (max-width: 1000px) {
    display: none;
  }
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

  @media only screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    font-size: 0.9rem;
  }
`;

export const SummarySectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0;

  @media only screen and (min-width: 1600px) {
    font-size: 1.7rem;
  }
`;

export const CloseRow = styled(Row)`
  justify-content: flex-end;
  margin-bottom: 16px;
  padding-top: 8px;

  @media only screen and (max-width: 1000px) {
    justify-content: flex-start;
  }
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

export const PromoCodeRow = styled(CostRow)`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const TotalCostRow = styled(CostRow)`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const CostDetails = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* @media only screen and (max-width: 1000px) {
    &:last-child {
      display: none;
    }
  } */
`;

export const DetName = styled.span`
  font-size: 1.15rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const DetValue = styled.span`
  /* font-weight: bold; */
  font-size: 1.1rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
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

  @media only screen and (max-width: 1000px) {
    height: 83%;
  }
`;

export const CheckoutBtn = styled(CartButton)<{disabled: boolean}>`
  background-color: ${({theme}) => theme.accent};
  color: ${({theme}) => theme.secondary};
  margin: 0;
  pointer-events: ${({disabled}) => (disabled ? "none" : "initial")};
  opacity: ${({disabled}) => (disabled ? 0.4 : 1)};

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const CheckoutBtnM = styled(CheckoutBtn)`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const Amt = styled.span`
  text-transform: capitalize;
  font-size: 0.95rem;
`;

export const Upper = styled.div``;

export const CloseIcon = styled(X)`
  cursor: pointer;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
