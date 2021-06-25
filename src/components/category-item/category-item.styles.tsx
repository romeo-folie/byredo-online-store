import styled from "styled-components";

interface Props {
  active?: boolean;
}

export const Item = styled.li<Props>`
  margin-bottom: 10px;
  padding-left: ${({active}) => (active ? "8px" : 0)};
  font-weight: ${({active}) => (active ? "bold" : "normal")};
  cursor: pointer;
  color: ${({active}) => (active ? "black" : "rgba(0, 0, 0, 0.6)")};
`;
