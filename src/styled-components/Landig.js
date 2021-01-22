import styled from 'styled-components';

export const Logo = styled.img`  
  width: 110px;
  position: relative;
  top: 17px;
  left: 17px;
`;

export const MainImg = styled.img`
  display: block;
  max-width: 700px;
  margin: 0 auto;
`;

export const Button = styled.input`
  background-color: #79CF98;
  color: white;
  padding: 0.7rem 2rem;   
  border: none;
  border-radius: 7px;
  font-size: 1.3rem;  
  box-shadow: 2px 2px 3px gray;
  margin: 0 0.4rem;
  cursor: pointer;
  @media screen and (max-width: 720px) {
    font-size: 0.9rem; 
  }
`;

export const BtnContainer = styled.div`
  margin: 0 auto;
  max-width: 500px;
  display: flex;
  justify-content: center;
`;

export const LandingCont = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid black; */
  /* background: linear-gradient(to bottom, #EBF2EA 60%, #191F37 40%); */
  /* background: linear-gradient(to bottom, white 60%, #191F37 40%); */
`;