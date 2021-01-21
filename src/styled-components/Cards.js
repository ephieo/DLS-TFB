import styled from 'styled-components';

export const QuizContainer = styled.div`
  height: 80vh;
  padding: 0 1.5rem;  
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */

  @media screen and (max-width: 720px) {
    flex-direction: column;
    height: auto;
    margin-top: 1rem;
  }

`;

export const ImgCont = styled.div`  
  width: 35%;
  margin: 0 1rem;
  background-color: #ABC6FD;
  padding: 1rem 0 2rem;
  border-radius: 7px;
  box-shadow: 1px 3px 6px gray;
  border: 7px solid #6586CA;
  @media screen and (max-width: 720px) {
    width: 100%;
    margin: 0 1rem 0.5rem;
    padding: 0.3rem 0 0.7rem;
    border: 5px solid #6586CA;
  }
`;

export const ChoiceCont = styled.div`
  /* border: 1px solid black;   */
  width: 25%;  
  margin: 0 1rem;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const QuestionBtn = styled.button`
  border: 5px solid #6586CA;
  display: block;
  width: 100%;
  height: auto;
  margin: 0.7rem auto;
  background-color: #ABC6FD;
  padding: 1.2rem;
  border-radius: 7px;
  box-shadow: 1px 3px 6px gray;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7;    
  }
  @media screen and (max-width: 720px) {
    margin: 0.4rem auto;
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`;

export const Img = styled.img`  
  display: block;
  width: 60%;
  margin: 1rem auto;
  border-radius: 7px;
  box-shadow: 1px 3px 3px gray;
  background-color: white;
`;

export const QuestionText = styled.div`  
  width: 90%;
  margin: 1.5rem auto;
  font-size: 1.5rem;  
  @media screen and (max-width: 720px) {
    font-size: 1rem;
  }
`;

export const DscCont = styled.div`  
  /* border: 7px solid #3F9885;   */
  width: 65%;
  height: 75%; 
  display: flex;
  justify-content: center;
  align-items: center;  
  border-radius: 9px;
  box-shadow: 1px 3px 6px gray;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    width: 95%;
    height: auto;
    padding: 1.7rem 0; 
  }
  
`;

export const ContentCont = styled.div`  
  width: 70%;
  margin: 0 1.5rem; 
`;

export const Heading = styled.p`  
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0px 1px 2px gray;  
`;

export const NextBtn = styled.button`  
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 7px;
  box-shadow: 1px 3px 6px gray;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    opacity: 0.8;    
  }
`;

export const Description = styled.p`  
  font-size: 1.3rem;  
`;

export const ResultImg = styled.img`  
  display: block;
  height: 70%;
  @media screen and (max-width: 720px) {
    width: 100%;
    height: auto;
  }
`;

export const ResultCont = styled.div`  
  display: flex;
  flex-direction: column; 
  width: 60%;
  height: 100%;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const AccountBtn = styled.button`  
  padding: 1rem 3rem;
  margin-top: 2rem;
  background-color: #79CF98;
  border: none;
  box-shadow: 1px 3px 6px gray;
  border-radius: 10px;  
  font-size: 1rem;
  &:hover {
    opacity: 0.8;    
  }
`;

export const ResultText = styled.p`  
  font-size: 1.7rem;
  @media screen and (max-width: 720px) {
    font-size: 1.2rem;
  }
`;





// export const QuizContainer = styled.div`
//   color: #adebad;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   width: 50vw;
//   height: ${(props) => props.height || 'none'};
//   border: solid #08302e 3px;
//   border-radius: 20px;
//   background: ${(props) => props.background || '#08302e'};
//   box-shadow: 7px 7px 5px grey;
// `;


// export const ImgCont = styled.div`
//   display: flex;
//   background: #08302e;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   width: ${(props) => props.width || 'none'};
//   height: ${(props) => props.height || 'none'};
//   border: ${(props) => props.border || 'none'};
//   margin: 0.5rem;
//   border-radius: 20px;
//   overflow: hidden;
//   padding-left: ${(props) => props.border || '2rem'};
//   padding-right: ${(props) => props.border || '2rem'};
//   color: #adebad;
// `;
// //solid #adebad 3px

// export const QuestionCont = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   width: 50%;
//   height: 80%;
//   border: solid #adebad 3px;
//   margin: 2rem;
//   border-radius: 20px;
//   background: #08302e;
// `;
// export const QuestionBtn = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 60%;
//   height: 10%;
//   border: solid #adebad 3px;
//   margin: 1rem;
//   border-radius: 20px;
//   background: ${(props) => props.background || '#08302e'};
//   color: #adebad;
//   padding: 1rem;
// `;

// export const Img = styled.img`
//   width: 20vw;
//   padding: 0.8rem;
//   border: solid #adebad 3px;
//   border-radius: 20px;
//   margin: 3rem;
// `;
