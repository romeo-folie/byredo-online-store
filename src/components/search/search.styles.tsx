import styled from "styled-components";
import Search from "../../../public/vectors/search-outline.svg";
import Logo from "../../../public/vectors/logo.svg";
import {Header as MHeader} from "../side-menu/side-menu.styles";
import {Menu as MMenu, Brand as MBrand} from "../header/header.styles";

export const Container = styled.div<{isOpen?: boolean}>`
  height: 100vh;
  width: ${({isOpen}) => (isOpen ? "100%" : "0")};
  right: ${({isOpen}) => (isOpen ? "0" : "-150px")};
  padding: 15px;
  background-color: ${({theme}) => theme.secondary};
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  transition: all 0.3s;
  z-index: 180;
  display: flex;
  overflow: hidden;
`;

export const Header = styled(MHeader)`
  z-index: 10;
`;

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

  z-index: 10;
`;

export const InputWrap = styled.div<{isFocused?: boolean}>`
  height: ${({isFocused}) => (isFocused ? "100px" : "80px")};
  width: ${({isFocused}) => (isFocused ? "105%" : "100%")};
  border: ${({isFocused}) => (isFocused ? "2px solid #000" : "1px solid rgba(0,0,0,0.15)")};
  border-radius: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: ${({isFocused}) => (isFocused ? "0 20px 40px rgba(0,0,0,0.12)" : "none")};
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 0 20px;

  @media only screen and (max-width: 480px) {
    height: ${({isFocused}) => (isFocused ? "80px" : "60px")};
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 20px;
  font-size: 2rem;
  font-weight: bold;
  background: transparent;

  @media only screen and (min-width: 1600px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
  
  &::placeholder {
    color: rgba(0,0,0,0.2);
    font-weight: normal;
  }
`;

export const SearchIcon = styled(Search)`
  width: 35px;
  height: 35px;
  opacity: 0.5;
`;

export const Items = styled.div`
  width: 100%;
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
  text-align: center;
  width: 100%;
  margin-top: 50px;

  @media only screen and (min-width: 1600px) {
    font-size: 1.4rem;
  }
`;
