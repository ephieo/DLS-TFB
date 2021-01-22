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
  border: ${(props) => props.border || '#93d4c4 solid 3px'};
  border-radius: 20px;
  background: ${(props) => props.background || '#93d4c4'};
  margin: ${(props) => props.margin || '1rem'};
  padding: ${(props) => props.padding || '1rem 0.5rem'};
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
  background: #70bf81;
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
  background: ${(props) => props.background || '#495963'};
  width: ${(props) => props.width || '18vw'};
  height: ${(props) => props.height || '18vw'};
  margin: ${(props) => props.margin || '1rem'};
  border: ${(props) => props.border || '#93d4c4 solid 3px'};
  border-radius: 10px;
  color: #b0c5f8;
`;

export const CardCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.flexdir || ''};
  width: ${(props) => props.width || '50vw'};
  /* border: #93d4c4 solid 3px; */
  height: ${(props) => props.height || ''};
  margin-top: ${(props) => props.mrgtop || ''};

  @media (max-width: 400px) {
    width: 40vw;
    padding: 3rem;
  }
`;

export const MainCont = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.flexdir || 'row'};
  height: ${(props) => props.height || ''};
  width: ${(props) => props.width || ''};
  margin: ${(props) => props.margin || ''};
  /* border: red solid 3px; */

  @media (max-width: 400px) {
    flex-direction: column;
    margin: 1rem 0;
    max-width: 100%;
    overflow-x: hidden;
  }
`;

export const OptionsImg = styled.img`
  width: ${(props) => props.width || '25vw'};
  margin-bottom: ${(props) => props.mrgbtm || '0'};
  background: transparent;
`;

export const StageBtn = styled.button`
  display: block;
  margin: 1rem auto;
  padding: 1rem 1.5rem;
  background-color: #ABC6FD;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 3px 5px gray;
  width: 300px;
`;
  
export const Img = styled.img`
  width: ${(props) => props.width || '20vw'};

  @media (max-width: 400px) {
    width: 80vw;
  }
`;

export const AccBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background: #70bf81;
  /* width: 50%; */
  padding: 1rem;
  border-radius: 20px;
  color: white;
  margin: 0.5rem;
`;

export const AccCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.background || '#495963'};
  width: ${(props) => props.width || ''};
  height: ${(props) => props.height || ''};
  padding: ${(props) => props.padding || ''};
  border: ${(props) => props.border || ''};
  border-left: ${(props) => props.bdrleft || ''};
  border-right: ${(props) => props.bdrright || ''};
  border-bottom: ${(props) => props.bdrbottom || ''};
  border-top: ${(props) => props.bdrtop || ''};
  border-radius: 10px;
  color: ${(props) => props.color || '#b0c5f8'};
  padding: ${(props) => props.padding || ''};
  line-height: 2rem;

  @media (max-width: 400px) {
    width: 80vw;
    height: 40vh;
    overflow: scroll;
    font-size: 10px;
    border: #70bf81 solid 3px;
    border-left: '';
    border-right: '';
    border-bottom: '';
    border-top: '';
  }
`;

export const Break = styled.div`
  width: 100%;
  height: 0.3vh;
  background: #70bf81;
  margin: 1.7rem 0;
  transform: ${(props) => props.skew || 'skewY(-18deg)'};
  border-radius: 50%;

  @media (max-width: 400px) {
    margin: 3.5rem 0;
  }
`;


export const Video = styled.video`
width:60vw;
`