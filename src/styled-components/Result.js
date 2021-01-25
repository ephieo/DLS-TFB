import styled from 'styled-components';

export const ResultCont = styled.div`  
  width: 100%;
  height: 100vh;
  display: flex;  
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ResultImg = styled.img`  
  display: block;
  height: 50%;
  @media screen and (max-width: 720px) {
    width: 80%;
    height: auto;
  }
`;

export const ResultText = styled.p`  
  font-size: 1.7rem;
  @media screen and (max-width: 720px) {
    font-size: 1.2rem;
  }
`;