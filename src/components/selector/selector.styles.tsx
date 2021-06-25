import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  /* &:not(:last-of-type) {
    margin-bottom: 10px;
  } */
`;

export const Input = styled.select`
  width: 60%;
  background: transparent;
  border: none;
  margin-left: auto;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`;

export const Option = styled.option``;
