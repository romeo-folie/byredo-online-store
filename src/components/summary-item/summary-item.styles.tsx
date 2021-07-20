import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

export const Wrap = styled.div<{width?: number}>`
  width: ${({width}) => (width ? `${width}%` : "100%")};
`;

export const Image = styled.img`
  width: 50%;
`;

export const Col = styled.div``;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailRow = styled(Row)`
  margin-top: 10px;
`;

export const Span = styled.span`
  color: rgba(0, 0, 0, 0.5);
`;

export const Price = styled(Span)`
  color: ${({theme}) => theme.accent};
`;

export const Size = styled(Span)`
  margin-right: 15px;
`;
