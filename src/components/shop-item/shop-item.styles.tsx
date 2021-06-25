import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 25%;
`;

export const Photo = styled.img`
  max-width: 250px;
  filter: drop-shadow(30px 15px 4px rgba(0,0,0, 0.1));
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 1.15rem;
  position: relative;
  bottom: 25px;
`;

export const Price = styled.h3`
  font-weight: normal;
  margin-top: 0;
  font-size: 1.15rem;
  position: relative;
  bottom: 25px;
`;
