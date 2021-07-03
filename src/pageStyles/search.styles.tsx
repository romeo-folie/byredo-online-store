import styled from "styled-components";
import Search from "../../public/vectors/search-xl.svg";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({theme}) => theme.secondary};
  display: flex;
  align-items: flex-end;
`;

export const ContentWrap = styled.div`
  width: 55%;
  height: 80%;
  margin: 0 auto;
  /* background-color: red; */
`;

export const InputWrap = styled.div`
  height: 10%;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin-bottom: 50px; */
`;

export const Input = styled.input`
  width: 95%;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 10px;
  font-size: 1.3rem;
  background: transparent;
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
