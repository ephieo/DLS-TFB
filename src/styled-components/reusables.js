import styled from 'styled-components';

export const FlexHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: fixed;
  /* border: solid teal 3px; */
  background: white;
`;

export const Button = styled.button`
  border: #93d4c4 solid 3px;
  border-radius: 20px;
  background: #93d4c4;
  margin: 1rem;
  padding: 1rem 0.5rem;
`;

export const Logo = styled.img`
  width: 10vw;
  margin: 1rem;
`;

export const ClearText = styled.p`
  background: transparent;
  color: ${(props) => props.color || 'black'};
  font-size: 27px;
  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export const FlexFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  background: #b0c5f8;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 10vh;
  /* opacity: 0.9; */
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background: #495963;
  width: 30vw;
  height: 30vw;
  margin: 1rem;
  border: #93d4c4 solid 3px;
  border-radius: 10px;
  color: #b0c5f8;
`;

export const CardCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.flexdir || ''};
  width: 90vw;
  /* border: #93d4c4 solid 3px; */
  height: ${(props) => props.height || ''};
  margin-top: ${(props) => props.mrgtop || ''};

  @media (max-width: 400px) {
    width: 40vw;
  }
`;

export const MainCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: ${(props) => props.height || ''};
  /* border: red solid 3px; */
`;

export const OptionsImg = styled.img`
  width: ${(props) => props.width || '25vw'};
  margin-bottom: ${(props) => props.mrgbtm || '0'};
  background: transparent;
`;
