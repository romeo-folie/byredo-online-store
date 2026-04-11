import styled from "styled-components";

export const Option = styled.a<{active?: boolean}>`
  font-family: 'Outfit', sans-serif;
  font-size: ${({active}) => (active ? "1.1rem" : "1.05rem")};
  font-weight: ${({active}) => (active ? 600 : 400)};
  color: ${({active, theme}) => (active ? theme.accent : "rgba(0, 0, 0, 0.7)")};
  text-transform: capitalize;
  letter-spacing: 0.05em;
  transition: font-size 0.3s;

  &:not(:last-of-type) {
    margin-right: 25px;
  }

  @media only screen and (min-width: 1600px) {
    font-size: ${({active}) => (active ? "1.25rem" : "1.2rem")};
  }

  @media only screen and (max-width: 1024px) {
    font-size: ${({active}) => (active ? "1rem" : "0.95rem")};
    &:not(:last-of-type) {
      margin-right: 20px;
    }
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
