import styled from "styled-components";
import {Button as FButton} from "../form/form.styles";

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 100vh;
    justify-content: center;
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
`;

export const Row = styled.div`
  display: flex;
`;

export const Button = styled(FButton)`
  width: 100%;
`;
