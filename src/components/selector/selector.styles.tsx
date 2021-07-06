import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  /* &:not(:last-of-type) {
    margin-bottom: 10px;
  } */
  @media only screen and (max-width: 1000px) {
    width: 48%;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
  }
`;

export const Input = styled.select`
  width: 60%;
  background: transparent;
  border: none;
  margin-left: auto;
  font-weight: bold;
  font-size: 0.95rem;
  &:focus {
    outline: none;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 1024px) {
    margin: 0 auto;
    font-size: 0.85rem;
    width: 100%;
  }

  /* @media only screen and (max-width: 1000px) {
    margin: 0 auto;
    width: 100%;
  } */
`;

export const Option = styled.option``;
