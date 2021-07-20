import styled from "styled-components";
import {
  Container as MHeader,
  UserIcon as UIcon,
  SearchIcon as SIcon,
  MenuIcon as MIcon,
  Brand as Logo,
} from "../components/header/header.styles";
import {CartButton} from "./products/product.styles";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span<{bold?: boolean}>`
  color: rgba(0, 0, 0, 0.7);
  font-weight: ${({bold}) => (bold ? "bold" : "normal")};
`;

export const P = styled.p`
  color: rgba(0, 0, 0, 0.7);
`;

export const BaseRow = styled(Row)`
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

export const MessageRow = styled(BaseRow)`
  @media only screen and (min-width: 1600px) {
    & > div span,
    & > div p {
      font-size: 1.3rem;
    }
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-end;

    & > div {
      width: 100%;
      margin-bottom: 20px;
      margin-top: 10px;
    }
  }
`;

export const Detail = styled(Row)`
  margin-bottom: 30px;
  align-items: baseline;

  & > span:first-of-type {
    width: 40%;
  }

  & > span:nth-of-type(2) {
    width: 45%;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }
`;

export const Wrap = styled.div<{width?: number}>`
  width: ${({width}) => (width ? `${width}%` : "100%")};
`;

export const Spacer = styled.div<{width?: number}>`
  min-width: ${({width}) => (width ? `${width}%` : "100%")};
`;

export const Items = styled.div`
  margin-bottom: 30px;
`;

export const MainSection = styled.div`
  width: 70%;
  z-index: 100;
  background-color: ${({theme}) => theme.secondary};
  padding: 100px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    width: 60%;
    padding-top: 50px;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 40%;
    padding-top: 0;
  }
`;

export const MainTitle = styled.h1`
  font-weight: normal;
  font-size: 2.5rem;
  margin-bottom: 15px;

  @media only screen and (min-width: 1600px) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 720px) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 380px) {
    font-size: 1.3rem;
  }
`;

export const SubTitle = styled.span`
  width: 100%;
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.1rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const SummarySection = styled.div`
  width: 30%;
  z-index: 100;
  background-color: ${({theme}) => theme.primary};
  padding: 50px 20px 20px;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    width: 40%;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 60%;
  }
`;

export const SummaryTitle = styled.h3`
  font-weight: normal;
  font-size: 1.4rem;
  margin-bottom: 50px;

  @media only screen and (min-width: 1600px) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 380px) {
    font-size: 1.3rem;
  }
`;

export const Header = styled(MHeader)`
  z-index: 160;
`;

export const Brand = styled(Logo)``;

export const Search = styled(SIcon)``;

export const User = styled(UIcon)``;

export const Menu = styled(MIcon)``;

export const Button = styled(CartButton)`
  width: 200px;
  margin-bottom: 0;

  @media only screen and (max-width: 720px) {
    padding: 10px;
  }
`;
