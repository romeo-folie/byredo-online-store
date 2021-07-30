import styled from "styled-components";
import {Button as FButton} from "../form/form.styles";

export const Container = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  justify-content: center;
  padding: 80px 0 50px;

  &:first-of-type {
    margin-bottom: 50%;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 60%;

  @media only screen and (max-width: 1024px) {
    width: 80%;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;

  @media only screen and (max-width: 1000px) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 700px) {
    font-size: 1.6rem;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Button = styled(FButton)`
  width: 100%;
`;
