import styled from "styled-components";
import Logo from "../../../public/vectors/logo.svg";
import X from "../../../public/vectors/x.svg";
import Insta from "../../../public/vectors/instagram.svg";
import Fb from "../../../public/vectors/facebook.svg";
import Arrow from "../../../public/vectors/arrow-left.svg";

export const Container = styled.div<{isOpen: boolean}>`
  height: 100vh;
  padding: 15px;
  background-color: ${({theme}) => theme.primary};
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  margin-bottom: 15px;
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
  cursor: pointer;

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
  cursor: pointer;
`;

export const CloseIcon = styled(X)`
  cursor: pointer;
`;

export const InstaIcon = styled(Insta)`
  margin-right: 13px;
  cursor: pointer;
`;

export const FacebookIcon = styled(Fb)`
  cursor: pointer;
`;

export const SocialWrap = styled.div`
  display: flex;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 2px;
  align-items: center;
`;

export const Title = styled.span`
  padding-top: 4px;
  font-size: 1.3rem;
  margin-left: 25px;
  color: ${({theme}) => theme.accent};
`;

export const ArrowIcon = styled(Arrow)`
  cursor: pointer;
`;

export const SubMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 35px;
  margin-top: 25px;
  overflow-y: auto;
  max-height: calc(100vh - 120px);
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
