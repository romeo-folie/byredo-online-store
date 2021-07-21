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
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 1001px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Forms = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  padding-bottom: 30px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
