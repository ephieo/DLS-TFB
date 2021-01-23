import styled from 'styled-components';

export const FlexFooter = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row;
background-color: #f0f0f1;
width: 100%;
position: fixed;
bottom: 0;
height: auto;
box-shadow: -3px 1px 5px gray;
@media (min-width: 768px) {
  top: 0;
  bottom: auto;
  background-color: white;
  justify-content: flex-end;
  padding: 1.2rem 15rem 0 0;
  box-shadow: none;
  
}
`;

export const Icon = styled.img`
  display: block;
  width: 30px;  
  margin: 2px auto;
  @media (min-width: 768px) {
      width: 24px;

  }
`;

export const ClearText = styled.p`
  background: transparent;
  color: ${(props) => props.color || 'black'};
  font-size: 15px;
  @media (min-width: 768px) {
    /* color: #599867; green */
    color: #495963;
    font-size: 1.1rem;
    font-weight: bold;
    margin-left: 7px;
    /* text-shadow: 1px 0px 1px gray; */
  }
`;

export const ItemCont = styled.div`
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin: 0.7rem 1rem;
    &:hover {
    opacity: 0.8;
  }
  }
`;