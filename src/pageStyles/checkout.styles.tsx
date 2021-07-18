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
  width: 18%;
  padding-left: 15px;
  padding-top: 120px;

  @media only screen and (min-width: 1600px) {
    padding-top: 180px;
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Forms = styled.div`
  width: 52%;
  z-index: 120;
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

  @media only screen and (max-width: 1000px) {
    width: 65%;
    padding-left: 50px;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
  }

  @media only screen and (max-width: 640px) {
    padding-left: 35px;
  }
`;

export const ItemSection = styled.div`
  width: 35%;
  background-color: ${({theme}) => theme.secondary};
  z-index: 120;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    padding: 20px 15px;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
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
  font-size: 1.4rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 1.25rem;
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

  @media only screen and (max-width: 1000px) {
    font-size: 1.1rem;
  }
`;
