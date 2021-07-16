import styled from "styled-components"

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
  padding-top: 50px;

  @media only screen and (max-width: 1024px) {
    width: 80%;
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