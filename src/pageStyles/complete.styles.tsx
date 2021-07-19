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
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  color: rgba(0, 0, 0, 0.7);
`;

export const P = styled.p`
  color: rgba(0, 0, 0, 0.7);
`;

export const BaseRow = styled(Row)`
  justify-content: space-between;
  align-items: baseline;
`;

export const Detail = styled(BaseRow)`
  margin-bottom: 30px;
`;

export const Wrap = styled.div<{width?: number}>`
  width: ${({width}) => (width ? `${width}%` : "100%")};
`;

export const MainSection = styled.div`
  width: 70%;
  z-index: 100;
  background-color: ${({theme}) => theme.secondary};
  padding: 100px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainTitle = styled.h1`
  font-weight: normal;
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

export const SubTitle = styled.span`
  width: 100%;
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.1rem;
`;

export const SummarySection = styled.div`
  width: 30%;
  z-index: 100;
  background-color: ${({theme}) => theme.primary};
  padding: 70px 20px 20px;
`;

export const SummaryTitle = styled.h3`
  font-weight: normal;
  font-size: 1.4rem;
  margin-bottom: 50px;
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
`;
