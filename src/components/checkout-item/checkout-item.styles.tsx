import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  &:not(:last-of-type) {
    margin-bottom: 25px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: baseline;
`;

export const SpacedRow = styled(Row)`
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Name = styled.span`
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.5);

  @media only screen and (min-width: 1600px) {
    font-size: 1.25rem;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const Qty = styled.span`
  /* font-size: 0.9rem; */
  @media only screen and (min-width: 1600px) {
    font-size: 1.1rem;
  }
`;

export const Price = styled.span`
  margin-left: 20px;

  @media only screen and (min-width: 1600px) {
    font-size: 1.1rem;
  }
`;

export const Size = styled.span`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.5);
  margin-right: 10px;

  @media only screen and (min-width: 1600px) {
    font-size: 1.1rem;
  }
`;

export const Type = styled.span`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;

  @media only screen and (min-width: 1600px) {
    font-size: 1.1rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
