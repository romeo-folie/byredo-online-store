import styled from "styled-components";
import {Button as FButton} from "../form/form.styles";

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 60%;
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
