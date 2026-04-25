import styled from "styled-components";
import Logo from "../../../public/vectors/logo.svg";
import X from "../../../public/vectors/x.svg";
import Insta from "../../../public/vectors/instagram.svg";
import Fb from "../../../public/vectors/facebook.svg";
import ChevronLeft from "../../../public/vectors/chevron-left.svg";

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

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ArrowIcon = styled(ChevronLeft)`
  cursor: pointer;
  stroke: rgba(0, 0, 0, 0.6);
`;

export const Title = styled.span`
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.7);
  text-transform: capitalize;
`;

export const SubMenuWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
