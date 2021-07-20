import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({theme}) => theme.primary};
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Forms = styled.div`
  width: 80%;
  display: flex;
  padding-top: 20px;
  /* align-items: center; */
`;
