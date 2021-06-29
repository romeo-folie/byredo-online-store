import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({theme}) => theme.primary};
  display: flex;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const DescSection = styled.div`
  width: 21%;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  justify-content: flex-end;

  @media only screen and (min-width: 1600px) {
    width: 20%;
  }

  @media only screen and (max-width: 1024px) {
    width: 25%;
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ProdType = styled.span`
  color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1.1px;
  /* margin-bottom: 10px; */
`;

export const ProdName = styled.h2`
  font-weight: normal;
  font-size: 2.5rem;
  /* margin-top: 10px;*/
  margin: 13px 0 5px;
`;

export const Type = styled(ProdType)`
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const Name = styled(ProdName)`
  font-size: 1.8rem;
  margin-bottom: 10px;
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const ProdDesc = styled.p`
  color: rgba(0, 0, 0, 0.5);
  word-break: break-all;
  margin-bottom: 30px;
  line-height: 1.8;
`;

export const ProductSection = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 1600px) {
    width: 60%;
  }

  @media only screen and (max-width: 1024px) {
    width: 50%;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 70%;
    flex-direction: row;
    justify-content: center;
    overflow-y: hidden;
    overflow-x: auto;
    /* padding-top: 80px; */
  }
`;

export const ProdImage = styled.img`
  width: 70%;
  filter: drop-shadow(30px 15px 4px rgba(0, 0, 0, 0.1));
  /* margin: 100px 0; */

  @media only screen and (max-width: 1024px) {
    width: 80%;
    /* margin: auto 10%; */
    /* margin: 0 100px; */
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const DetailSection = styled.div`
  padding-top: 120px;
  padding-right: 15px;
  width: 24%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1600px) {
    padding-top: 150px;
    width: 20%;
  }

  @media only screen and (max-width: 1024px) {
    width: 25%;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding-left: 15px;
    padding-top: 0;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 40px;

  @media only screen and (max-width: 1000px) {
    margin-bottom: 30px;
    justify-content: space-between;
  }
`;

export const Price = styled.span`
  font-size: 1.8rem;
  width: 30%;

  @media only screen and (max-width: 1000px) {
    font-size: 1.6rem;
    /* width: 50%; */
  }
`;

export const Size = styled.span`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.4);

  &:not(:last-of-type) {
    margin-right: 15px;
    color: ${({theme}) => theme.accent};
  }
`;

export const DetailRow = styled.div`
  display: flex;
  align-items: flex-start;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  &:last-of-type {
    margin-top: 40px;
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const DetailName = styled.span`
  width: 30%;
`;

export const DetailDesc = styled.span`
  color: rgba(0, 0, 0, 0.4);
  word-break: break-all;
  width: 60%;
`;

export const CartButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.accent};
  text-transform: uppercase;
  padding: 15px 0;
  margin-top: auto;
  margin-bottom: 30px;
  cursor: pointer;
`;


