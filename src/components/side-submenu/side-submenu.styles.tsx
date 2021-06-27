import styled from "styled-components";
import {Container as MContainer} from "../side-menu/side-menu.styles";
import {Header as MHeader} from "../side-menu/side-menu.styles";
import Arrow from "../../../public/vectors/arrow-left.svg";

export const Container = styled(MContainer)`
  background-color: ${({theme}) => theme.secondary};
  /* transition: none; */
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Header = styled(MHeader)`
  margin-bottom: 10px;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2px;
  align-items: center;
`;

export const Title = styled.span`
  padding-top: 3px;
  font-size: 1.3rem;
  margin-left: 15px;
`;

export const ArrowIcon = styled(Arrow)``;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`;
