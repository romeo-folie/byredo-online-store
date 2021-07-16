import styled from "styled-components";

export const FormSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  padding: 50px 0;

  @media only screen and (max-width: 1024px) {
    width: 80%;
  }
`;

export const Button = styled.button`
  width: 200px;
  padding: 15px;
  border: 1px solid ${({theme}) => theme.accent};
  background-color: ${({theme}) => theme.accent};
  color: ${({theme}) => theme.secondary};
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 25px;

  @media only screen and (min-width: 1600px) {
    width: 230px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Wrap = styled.div<{width?: number}>`
  width: ${({width}) => (width ? `${width}%` : "46%")};
`;

export const FormSectionTitle = styled.span`
  font-size: 1.15rem;
  margin-bottom: 10px;
`;
