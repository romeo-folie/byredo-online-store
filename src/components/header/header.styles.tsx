import styled from "styled-components";
import Logo from "../../assets/vectors/logo.svg";
import Person from "../../assets/vectors/person-outline.svg";
import Search from "../../assets/vectors/search-outline.svg";

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  padding: 15px;
  padding-right: 25px;
  z-index: 20;
`;

export const Brand = styled(Logo)`
  width: 100px;

  @media only screen and (min-width: 1600px) {
    width: 130px;
  }

  @media only screen and (max-width: 1024px) {
    width: 80px;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
`;

export const UserIcon = styled(Person)`
  width: 25px;
  margin-right: 20px;
  margin-top: 3px;

  @media only screen and (min-width: 1600px) {
    width: 30px;
  }

  @media only screen and (max-width: 1024px) {
    width: 20px;
  }
`;

export const SearchIcon = styled(Search)`
  width: 25px;
  margin-right: 20px;
  margin-top: 5px;

  @media only screen and (min-width: 1600px) {
    width: 30px;
  }

  @media only screen and (max-width: 1024px) {
    width: 20px;
  }
`;
