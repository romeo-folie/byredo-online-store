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
`;

export const Brand = styled(Logo)`
  width: 100px;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavOption = styled.a`
  font-size: 17px;
  color: ${({theme}) => theme.accent};

  &:not(:last-of-type) {
    margin-right: 25px;
  }
`;

export const UserIcon = styled(Person)`
  width: 25px;
  margin-right: 15px;
  margin-top: 3px;
`;

export const SearchIcon = styled(Search)`
  width: 25px;
  margin-right: 15px;
  margin-top: 5px;
`;
