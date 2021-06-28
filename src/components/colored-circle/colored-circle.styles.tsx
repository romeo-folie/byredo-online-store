import styled from "styled-components";

interface Props {
  color: string;
  active: boolean;
}

export const Container = styled.div<{active?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({active}) => (active ? "1px solid black" : "none")};
  border-radius: 50%;
  height: 18px;
  width: 18px;
  background: transparent;
  /* padding: 5px; */

  &:not(:last-of-type) {
    margin-right: 5px;
  }
`;

export const Circle = styled.span<{color: string}>`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${({color}) => (color ? color : "#ffffff")};
  /* padding: 5px; */
`;
