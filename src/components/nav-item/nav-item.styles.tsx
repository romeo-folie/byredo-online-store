import styled from "styled-components";

export const Option = styled.a<{active: boolean}>`
  font-size: ${({active}) => (active ? "18px" : "17px")};
  font-weight: ${({active}) => (active ? "bold" : "normal")};
  color: ${({active, theme}) => (active ? theme.accent : "rgba(0, 0, 0, 0.6)")};

  &:not(:last-of-type) {
    margin-right: 25px;
  }
`;
