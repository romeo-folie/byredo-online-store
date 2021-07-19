import styled from "styled-components";

interface Props {
  active: boolean;
}

export const Item = styled.li<Props>`
  margin-bottom: 15px;
  padding-left: ${({active}) => (active ? "8px" : 0)};
  font-weight: ${({active}) => (active ? "bold" : "normal")};
  cursor: pointer;
  color: ${({active}) => (active ? "black" : "rgba(0, 0, 0, 0.6)")};
  transition: padding 0.5s;
  font-size: 1rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.2rem;
  }
`;
