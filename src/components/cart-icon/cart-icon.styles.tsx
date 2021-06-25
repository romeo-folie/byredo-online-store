import styled from "styled-components";
import Cart from "../../assets/vectors/shopping-bag.svg";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Count = styled.span`
  position: absolute;
  font-size: 9px;
  bottom: 2px;
`;

export const Bag = styled(Cart)`
  width: 25px;
`;
