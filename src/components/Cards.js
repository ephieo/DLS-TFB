import styled from 'styled-components';

export const QuizContainer = styled.div`
  color: #adebad;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 90vh;
  border: solid #08302e 3px;
  border-radius: 20px;
  background: #08302e;
  box-shadow: 7px 7px 5px grey;
`;
export const ImgCont = styled.div`
  display: flex;
  background: #08302e;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${(props) => props.width || 'none'};
  height: ${(props) => props.height || 'none'};
  border: ${(props) => props.border || 'none'};
  margin: 0.5rem;
  border-radius: 20px;
  overflow: hidden;
  padding-left: ${(props) => props.border || '2rem'};
  padding-right: ${(props) => props.border || '2rem'};
`;
//solid #adebad 3px

export const QuestionCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 80%;
  border: solid #adebad 3px;
  margin: 2rem;
  border-radius: 20px;
  background: #08302e;
`;
export const QuestionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 10%;
  border: solid #adebad 3px;
  margin: 1rem;
  border-radius: 20px;
  background: ${(props) => props.background || '#08302e'};
  color: #adebad;
  padding: 1rem;
`;

export const Img = styled.img`
  width: 20vw;
  padding: 0.8rem;
  border: solid #adebad 3px;
  border-radius: 20px;
  margin: 3rem;
`;
