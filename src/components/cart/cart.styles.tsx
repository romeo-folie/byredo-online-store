import styled from "styled-components";
import Back from "../../../public/vectors/chevron-left.svg";

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
  /* add a shadow or overlay or some shit */
  /* split this container into two parts */

  @media only screen and (max-width: 1024px) {
    width: ${({isOpen}) => (isOpen ? "100%" : "0")};
  }
`;

export const ItemSection = styled.div`
  height: 100%;
  width: 70%;
  padding: 15px 20px;
`;

export const SummarySection = styled.div`
  height: 100%;
  width: 30%;
  padding: 15px 20px;
  background-color: ${({theme}) => theme.primary};
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
`;

export const ItemCount = styled.span`
  text-transform: uppercase;
  font-size: 0.9rem;
`;

export const TableRow = styled(Row)`
  margin-bottom: 20px;
`;

export const THeader = styled.span<{flex: number}>`
  flex: ${({flex}) => flex};
`;
