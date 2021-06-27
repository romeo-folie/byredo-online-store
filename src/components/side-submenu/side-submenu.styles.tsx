import styled from "styled-components";
import {Container as MContainer} from "../side-menu/side-menu.styles";
import {Header as MHeader} from "../side-menu/side-menu.styles";
import Arrow from "../../../public/vectors/arrow-left.svg";

export const Container = styled(MContainer)`
  background-color: ${({theme}) => theme.secondary};
`;

export const Header = styled(MHeader)``;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2px;
  align-items: center;
  width: 35%;
`;

export const Title = styled.span`
  padding-top: 2px;
  font-size: 1.3rem;
`;

export const ArrowIcon = styled(Arrow)`
  margin-bottom: 2px;
`;
