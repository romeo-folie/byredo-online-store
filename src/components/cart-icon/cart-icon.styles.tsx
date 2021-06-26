import styled from "styled-components";
import Cart from "../../../public/vectors/shopping-bag.svg";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Count = styled.span`
  position: absolute;
  font-size: 0.6rem;
  bottom: 2px;

  @media only screen and (min-width: 1600px) {
    bottom: 3px;
    font-size: 0.7rem;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 0.55rem;
  }
`;

export const Bag = styled(Cart)`
  width: 25px;

  @media only screen and (min-width: 1600px) {
    width: 30px;
  }

  @media only screen and (max-width: 1024px) {
    width: 20px;
  }
`;
