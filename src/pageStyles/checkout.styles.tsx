import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({theme}) => theme.primary};
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Wrap = styled.div`
  width: 46%;
`;

export const TitleSection = styled.div`
  width: 20%;
  padding-left: 15px;
  padding-top: 120px;
`;

export const FormSection = styled.div`
  width: 50%;
  z-index: 150;
  background-color: ${({theme}) => theme.primary};
  padding-top: 120px;
`;

export const ItemSection = styled.div`
  width: 30%;
  background-color: ${({theme}) => theme.secondary};
  z-index: 150;
`;

export const PageTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0;
`;

export const FormTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: normal;
  margin: 0;
`;

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;


export const Button = styled.button`
  width: 46%;
  padding: 15px;
  border: 1px solid ${({theme}) => theme.accent};
  background-color: ${({theme}) => theme.accent};
  color: ${({theme}) => theme.secondary};
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 25px;
`;