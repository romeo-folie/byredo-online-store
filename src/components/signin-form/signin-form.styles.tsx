import styled from "styled-components";
import {Button as FButton} from "../form/form.styles";

export const Container = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    /* padding: 50px 0 20px; */
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
