import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({theme}) => theme.primary};
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const TitleSection = styled.div`
  width: 20%;
  padding-left: 15px;
  padding-top: 120px;

  @media only screen and (min-width: 1600px) {
    padding-top: 180px;
  }
`;

export const Forms = styled.div`
  width: 50%;
  z-index: 150;
  background-color: ${({theme}) => theme.primary};
  padding-top: 120px;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 1600px) {
    padding-top: 180px;
  }
`;

export const ItemSection = styled.div`
  width: 30%;
  background-color: ${({theme}) => theme.secondary};
  z-index: 150;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PageTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0;

  @media only screen and (min-width: 1600px) {
    font-size: 1.5rem;
  }
`;

export const ItemSectionTitle = styled.span`
  font-size: 1.25rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.4rem;
  }
`;

export const CartLink = styled.a`
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.95rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.1rem;
  }
`;

export const Items = styled.div`
  height: 80%;
  padding-top: 10px;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DetName = styled.span`
  color: rgba(0, 0, 0, 0.5);

  @media only screen and (min-width: 1600px) {
    font-size: 1.1rem;
  }
`;

export const DetValue = styled.span`
  font-size: 1.3rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.45rem;
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
