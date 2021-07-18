import styled from "styled-components";

export const FormSection = styled.section`
  width: 90%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  &:nth-of-type(2) {
    margin-bottom: 40%;
  }
`;

export const FormTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: normal;
  margin: 0;

  @media only screen and (max-width: 1000px) {
    font-size: 1.8rem;
  }
`;

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 50px 0 30px;

  @media only screen and (max-width: 1024px) {
    width: 80%;
  }

  @media only screen and (max-width: 640px) {
    width: 100%;
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
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 200px;
  padding: 15px;
  border: 1px solid ${({theme}) => theme.accent};
  background-color: ${({theme}) => theme.accent};
  color: ${({theme}) => theme.secondary};
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 30px;

  @media only screen and (min-width: 1600px) {
    width: 230px;
  }

  @media only screen and (max-width: 1000px) {
    width: 200px;
    font-size: 0.9rem;
  }
`;
