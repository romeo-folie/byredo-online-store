import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  cursor: pointer;
  /* margin: 5px; */
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 250px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media only screen and (min-width: 1600px) {
    width: 330px;
    height: 400px;
  }

  @media only screen and (max-width: 1024px) {
    width: 230px;
    height: 280px;
  }
`;

export const PhotoWrapper = styled.div`
  transition: all 0.8s ease;
  filter: drop-shadow(30px 15px 10px rgba(0, 0, 0, 0.15));
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 1.15rem;
  position: relative;
  bottom: 25px;

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }
`;

export const Price = styled.h3`
  font-weight: normal;
  margin-top: 0;
  font-size: 1.15rem;
  position: relative;
  bottom: 25px;

  @media only screen and (min-width: 1600px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }
`;
