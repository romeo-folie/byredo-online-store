import styled from "styled-components";
import Search from "../../../public/vectors/search-outline.svg";
import Logo from "../../../public/vectors/logo.svg";
import {Header as MHeader} from "../side-menu/side-menu.styles";
import {Menu as MMenu, Brand as MBrand} from "../header/header.styles";

export const Container = styled.div<{isOpen?: boolean}>`
  height: 100vh;
  width: 100%;
  top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
  padding: 15px;
  background-color: ${({theme}) => theme.secondary};
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  transition: all 0.3s;
  z-index: 180;
  display: flex;
`;

export const Header = styled(MHeader)``;

export const Brand = styled(Logo)`
  width: 100px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 80px;
  }
`;

export const Menu = styled(MMenu)`
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

export const ContentWrap = styled.div`
  width: 55%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    height: 87%;
    width: 75%;
  }

  /* @media only screen and (max-width: 1000px) {
    height: 90%;
  } */

  @media only screen and (max-width: 768px) {
    width: 80%;
  }

  @media only screen and (max-width: 700px) {
    width: 90%;
  }

  @media only screen and (max-width: 480px) {
    width: 95%;
  }
`;

export const InputWrap = styled.div`
  height: 60px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 480px) {
    height: 45px;
  }
`;

export const Input = styled.input`
  width: 95%;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 15px;
  font-size: 1.25rem;
  background: transparent;

  @media only screen and (min-width: 1600px) {
    font-size: 1.4rem;
    padding-left: 10px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.15rem;
  }
`;

export const SearchIcon = styled(Search)``;

export const Items = styled.div`
  height: 90%;
  padding: 50px 0 20px;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Message = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.2rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.4rem;
  }
`;
