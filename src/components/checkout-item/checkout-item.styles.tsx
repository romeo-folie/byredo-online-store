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
`;

export const Qty = styled.span`
  /* font-size: 0.9rem; */
`;

export const Price = styled.span`
  margin-left: 20px;
`;

export const Size = styled.span`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.5);
  margin-right: 10px;
`;

export const Type = styled.span`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.5);
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
