import styled from "styled-components";

export const Option = styled.a<{active?: boolean}>`
  font-size: ${({active}) => (active ? "1.2rem" : "1.18rem")};
  font-weight: ${({active}) => (active ? "bold" : "normal")};
  color: ${({active, theme}) => (active ? theme.accent : "rgba(0, 0, 0, 0.6)")};
  transition: font-size 1s;

  &:not(:last-of-type) {
    margin-right: 25px;
  }

  @media only screen and (min-width: 1600px) {
    font-size: ${({active}) => (active ? "1.4rem" : "1.3rem")};
  }

  @media only screen and (max-width: 1024px) {
    font-size: ${({active}) => (active ? "1.15rem" : "1rem")};
    &:not(:last-of-type) {
      margin-right: 20px;
    }
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
