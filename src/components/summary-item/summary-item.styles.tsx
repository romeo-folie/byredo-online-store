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

export const Col = styled.div`

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailRow = styled(Row)`
  margin-top: 10px;
  align-items: center;
`;

export const Span = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.1rem;
`;

export const Price = styled(Span)`
  color: ${({theme}) => theme.accent};
  font-size: 1.1rem;

  @media only screen and (min-width: 1600px) {
    font-size: 1.4rem;
  }
`;

export const Size = styled(Span)`
  margin-right: 15px;
`;

export const Type = styled(Span)`
  font-size: 0.8rem;
`;
