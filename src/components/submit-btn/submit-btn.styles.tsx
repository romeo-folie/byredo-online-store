import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  padding: 15px;
  border: 1px solid ${({theme}) => theme.accent};
  background-color: ${({theme}) => theme.accent};
  color: ${({theme}) => theme.secondary};
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 25px;

  @media only screen and (min-width: 1600px) {
    width: 230px;
  }
`;

export default Button;
