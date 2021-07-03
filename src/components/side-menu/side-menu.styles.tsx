import styled from "styled-components";
import Logo from "../../../public/vectors/logo.svg";
import X from "../../../public/vectors/x.svg";
import Insta from "../../../public/vectors/instagram.svg";
import Fb from "../../../public/vectors/facebook.svg";

export const Container = styled.div<{isOpen: boolean}>`
  height: 100vh;
  padding: 15px;
  background-color: ${({theme}) => theme.primary};
  position: absolute;
  overflow: hidden;
  z-index: 50;
  width: ${({isOpen}) => (isOpen ? "100%" : "0")};
  left: ${({isOpen}) => (isOpen ? "0" : "-50px")};
  transition: all 0.3s;

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 45px;

  @media only screen and (max-width: 340px) {
    margin-top: 25px;
  }
`;

export const Option = styled.a`
  font-size: 1.3rem;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.6);

  &:not(:last-of-type) {
    margin-bottom: 25px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  bottom: 15px;
  left: 0;
  padding: 0 15px;
`;

export const Brand = styled(Logo)`
  width: 80px;
`;

export const CloseIcon = styled(X)`
  cursor: pointer;
`;

export const InstaIcon = styled(Insta)`
  margin-right: 13px;
`;

export const FacebookIcon = styled(Fb)``;

export const SocialWrap = styled.div`
  display: flex;
`;
